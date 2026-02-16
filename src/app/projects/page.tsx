"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import {
    Plus,
    Edit2,
    Trash2,
    X,
    Upload,
    Calendar,
    Tag,
    ExternalLink,
} from "lucide-react";
import ConstructionProjectsTable from "@/components/about/ConstructionProjectsTable";

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
        image_url: "",
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
                const fileExt = file.name.split(".").pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const { data: uploadData, error: uploadError } =
                    await supabase.storage
                        .from("project-images")
                        .upload(fileName, file);

                if (uploadError) throw uploadError;
                image_url = supabase.storage
                    .from("project-images")
                    .getPublicUrl(uploadData.path).data.publicUrl;
            }

            if (editingProject) {
                await supabase
                    .from("projects")
                    .update({ ...formData, image_url })
                    .eq("id", editingProject.id);
            } else {
                await supabase
                    .from("projects")
                    .insert([{ ...formData, image_url }]);
            }

            setIsModalOpen(false);
            setEditingProject(null);
            setFormData({
                title: "",
                description: "",
                category: "Civil Engineering",
                completion_date: "",
                image_url: "",
            });
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
            image_url: project.image_url,
        });
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow ">
                {/* Hero */}
                <section className="bg-black py-38">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black text-white mb-6"
                            >
                                OUR{" "}
                                <span className="text-[#F2913F]">PROJECTS</span>
                            </motion.h1>
                            <p className="text-xl text-gray-400 max-w-2xl">
                                A list of engineering excellence and
                                infrastructure management across the globe.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="relative py-24 h-screen overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('/backgrounds/project_background.jpeg')",
                        }}
                    />

                    {/* Overlay for opacity control */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Content Layer */}
                    <div className="relative z-10">
                        <ConstructionProjectsTable />
                    </div>
                </section>
            </main>
        </div>
    );
}
