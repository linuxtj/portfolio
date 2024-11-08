import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Junior Linux Admin/IT Support Specialist"
            subTitle="Select Designs (2019 - 2024)"
            result="Linux and VMware administration, system deployment, Automation, configuration, and maintenance"
            desc="Linux Systems Administrator with extensive experience in enterprise infrastructure management, specializing in RedHat and Ubuntu environments. Expert in system automation, security hardening, and VMware administration. Proven track record of maintaining high-availability systems, implementing security compliance, and developing efficient automation solutions using Ansible, Python, and Bash scripting. Skilled in performance optimization, disaster recovery planning, and mentoring technical teams."
          />
          <ResumeCard
            title="Linux Systems Administrator / Engineer"
            subTitle="HomeLab (2019 - Present)"
            result="Successful maintenance and administration of HomeLab"
            desc="Passionate Linux Administrator maintaining an advanced home lab environment that mirrors enterprise infrastructure. Expertly manage containerized applications using Docker and Kubernetes, with a focus on automation and DevOps practices. Implement comprehensive monitoring solutions using Prometheus and Grafana, while maintaining high security standards through automated patching and configuration management with Ansible. Demonstrate strong expertise in infrastructure as code, continuous integration/deployment, and system optimization through practical application in a self-managed testing environment. Experience spans multiple Linux distributions including Red Hat, Fedora, and Ubuntu, with proven skills in networking, security hardening, and performance tuning."
          />
          <ResumeCard
            title="U.S Army Sergeant"
            subTitle="U.S Army (2012 - 2019)"
            result="Automated deployment process, improved system performance"
            desc="U.S. Army Sergeant with distinguished service record, demonstrating exceptional leadership and team management in high-pressure environments. Developed crucial skills in strategic planning, problem-solving, and cross-functional team leadership. Expertise in maintaining operational excellence through meticulous attention to detail and adherence to strict protocols. Proven track record of adapting to rapidly changing environments while maintaining clear communication channels and achieving mission objectives. These military leadership experiences directly translate to effective IT team management and strategic technology implementation."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
