import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {  loganalisys, automateduserprovisioning, ansiblecontainers, rsyncbackup, k8sansiblecluster, terraformcloudsetup } from "../assets/";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="PROJECTS"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Automated User Provisioning and Deprovisioning"
            des=""
            src={automateduserprovisioning}
          />
          <ProjectsCard
            title="k8s-ansible-cluster"
            des=""
            src={k8sansiblecluster}
          />
          <ProjectsCard
            title="Hybrid Cloud Setup with Terraform"
            des=""
            src={terraformcloudsetup}
          />
          <ProjectsCard
            title="Automated deployment of an Ansible control node within a Proxmox LXC container"
            des=""
            src={ansiblecontainers}
          />
          <ProjectsCard
            title="Backup Automation with Rsync and Cron"
            des=""
            src={rsyncbackup}
          />
          <ProjectsCard
            title="Automated Log Analysis with ELK Stack"
            des=""
            src={loganalisys}
          />
        </div>
      </FadeIn>
    </section>
  );
};


export default Projects;
