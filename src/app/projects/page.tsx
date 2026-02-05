"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import FloatingQuoteButton from "@/components/ui/floating-quote-button";
import { supabase } from "@/lib/supabase";
import { Plus, Edit2, Trash2, X, Upload, Calendar, Tag, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  completion_date: string;
  image_url: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Civil Engineering",
    completion_date: "",
    image_url: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setProjects(data);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let image_url = formData.image_url;
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('project-images')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        image_url = supabase.storage.from('project-images').getPublicUrl(uploadData.path).data.publicUrl;
      }

      if (editingProject) {
        await supabase.from("projects").update({ ...formData, image_url }).eq("id", editingProject.id);
      } else {
        await supabase.from("projects").insert([{ ...formData, image_url }]);
      }

      setIsModalOpen(false);
      setEditingProject(null);
      setFormData({ title: "", description: "", category: "Civil Engineering", completion_date: "", image_url: "" });
      setFile(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      await supabase.from("projects").delete().eq("id", id);
      fetchProjects();
    }
  };

  const openEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      completion_date: project.completion_date,
      image_url: project.image_url
    });
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[103px]">
        {/* Hero */}
        <section className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-black text-white mb-6"
                >
                  OUR <span className="text-[#F2913F]">PROJECTS</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  A showcase of engineering excellence and infrastructure management across the globe.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => setIsAdmin(!isAdmin)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    isAdmin ? "bg-[#F2913F] text-white" : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {isAdmin ? "Admin Mode Active" : "Admin Mode Off"}
                </button>
                {isAdmin && (
                  <button
                    onClick={() => {
                      setEditingProject(null);
                      setFormData({ title: "", description: "", category: "Civil Engineering", completion_date: "", image_url: "" });
                      setIsModalOpen(true);
                    }}
                    className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#F2913F] hover:text-white transition-all shadow-xl"
                  >
                    <Plus size={20} /> Add New Project
                  </button>
                )}
              </div>
            </div>
          </section>
  
          {/* Projects Grid */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.length === 0 ? (
                  <div className="col-span-full text-center py-20 text-gray-400 border-2 border-dashed border-gray-100 rounded-[40px]">
                    <p className="text-2xl font-bold">No projects found.</p>
                    <p>Switch to Admin Mode to add your first project showcase.</p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="group relative bg-gray-50 rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={project.image_url || "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="bg-[#F2913F] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">
                          <Calendar size={16} />
                          {project.completion_date}
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#F2913F] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <button className="text-black font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                            View Details <ExternalLink size={18} />
                          </button>
                          {isAdmin && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => openEdit(project)}
                                className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                              >
                                <Edit2 size={18} />
                              </button>
                              <button
                                onClick={() => handleDelete(project.id)}
                                className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </section>
  
          {/* Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsModalOpen(false)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden"
                >
                  <div className="p-8 md:p-12">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-3xl font-black text-gray-900">
                        {editingProject ? "Edit Project" : "Add New Project"}
                      </h2>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all"
                      >
                        <X size={24} />
                      </button>
                    </div>
  
                    <form onSubmit={handleSave} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Project Title</label>
                        <input
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F]"
                          placeholder="Enter project name"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Category</label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F]"
                          >
                            <option>Civil Engineering</option>
                            <option>Mechanical Engineering</option>
                            <option>Infrastructure</option>
                            <option>Industrial</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Completion Date</label>
                          <input
                            type="text"
                            required
                            value={formData.completion_date}
                            onChange={(e) => setFormData({ ...formData, completion_date: e.target.value })}
                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F]"
                            placeholder="e.g. Dec 2024"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Description</label>
                        <textarea
                          rows={4}
                          required
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] resize-none"
                          placeholder="Project details..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Project Image</label>
                        <div className="relative group">
                          <input
                            type="file"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="w-full px-6 py-8 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center group-hover:border-[#F2913F] transition-all bg-gray-50">
                            <Upload className="text-gray-400 group-hover:text-[#F2913F] mb-2" />
                            <span className="text-gray-500 font-medium">
                              {file ? file.name : "Click to upload image"}
                            </span>
                          </div>
                        </div>
                        {formData.image_url && !file && (
                          <p className="mt-2 text-xs text-gray-400">Current image URL: {formData.image_url}</p>
                        )}
                      </div>
  
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-[#F2913F] hover:text-white transition-all duration-300 shadow-xl disabled:opacity-50"
                      >
                        {loading ? "Saving..." : editingProject ? "Update Project" : "Create Project"}
                      </button>
                    </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
