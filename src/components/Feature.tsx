import { FaCube, FaTerminal, FaDocker } from "react-icons/fa";
import { SiTerraform, SiAnsible, SiJenkins } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="feature"
      className="flex justify-center items-center text-center w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Automation Scripts" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Bash Scripts"
            des="Write Bash scripts to automate common system administration tasks such as log rotation, backup, and user management on Linux systems."
            icon={<FaTerminal />}
          />
          <Card
            title="Ansible Playbooks"
            des="Create Ansible playbooks to automate configuration management tasks, such as installing software, configuring services, 
            and ensuring server consistency across a fleet of machines."
            icon={<SiAnsible />}
          />
          <Card
            title="Terraform Scripts"
            des="Write Terraform scripts to automate the provisioning and management of infrastructure resources, including VMs, 
            networks, and databases, AWS, Azure, or Google Cloud."
            icon={<SiTerraform />}
          />
          <Card
            title="Jenkins Pipeline Scripts"
            des="Write Jenkins Pipeline scripts to automate (CI/CD) processes. 
            Define stages, build, test, and deployment steps within your pipeline."
            icon={<SiJenkins />}
          />
          <Card
            title="Docker Compose Scripts"
            des="Write Docker scripts to define multi-container applications and services. Docker Compose simplifies the management of 
            containerized applications."
            icon={<FaDocker />}
          />
          <Card
            title="Kubernetes YAML Scripts"
            des=" Write K8s YAML scripts to define and manage containerized applications within K8s clusters."
            icon={<FaCube />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
