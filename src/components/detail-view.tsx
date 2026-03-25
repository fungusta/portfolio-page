"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { WorkExperienceCard } from "@/components/work-experience-card";
import { ProjectCard } from "@/components/project-card";
import type { BoardItem } from "@/types/board-types";

interface DetailViewProps {
  item: BoardItem;
  onClose: () => void;
}

export function DetailView({ item, onClose }: DetailViewProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const renderContent = () => {
    switch (item.content.type) {
      case "about":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary mb-4">About Me</h2>
            <p className="text-base text-primary/80 leading-relaxed">
              {item.content.bio}
            </p>
          </div>
        );

      case "experiences":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary mb-4">Work Experience</h2>
            <div className="space-y-4">
              {item.content.experiences.map((exp, index) => (
                <WorkExperienceCard
                  key={index}
                  company={exp.company}
                  role={exp.role}
                  logo={exp.logo}
                  link={exp.link}
                  duration={exp.duration}
                  description={exp.description}
                  achievements={exp.achievements}
                  techStack={exp.techStack}
                />
              ))}
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary mb-4">Projects</h2>
            <div className="space-y-4">
              {item.content.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  logo={project.logo}
                  link={project.link}
                  coreStack={project.coreStack}
                  infraServices={project.infraServices}
                />
              ))}
            </div>
          </div>
        );

      case "interests":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary mb-4">Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.content.interests.map((interest, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={interest.image}
                      alt={interest.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-secondary">{interest.name}</h3>
                    <p className="text-sm text-primary/80">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="detail-view-container">
      <div ref={cardRef} className="detail-view-card">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close detail view"
        >
          <X size={20} className="text-primary" />
        </button>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}
