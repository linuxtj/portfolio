import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Linux Administrator / VMware Administrator"
            subTitle="Biolife (March 2023 – Present)"
            result="Success"
          >
            <ul className="list-disc pl-4">
              <li>Deploy, Configure, and maintain systems across physical, virtual, and cloud environments via Red Hat Satellite </li>
              <li>Manage complete life-cycle of Linux servers including CentOS and Red Hat Enterprise Linux Physical and Virtual Servers via Red Hat Satellite, VMware deployments and Bare metal </li>
              <li>Worked on installation of operating systems, packages, and patches, manage and maintain user accounts, adding peripherals, system security, backup/recovery, performance tuning, troubleshooting at various levels </li>
              <li>Managed Linux-based systems (RedHat, Fedora and Ubuntu) for a network of 200+ users. </li>
              <li>Developed and implemented 20+ automation scripts using Bash and Python. </li>
              <li>Manage and administer Linux systems for ongoing support using automation tools like Ansible and Bash script </li>
              <li>Configured and maintained network services including DNS (BIND), DHCP, and firewalls (iptables, firewalld). </li>
              <li>Assisted in server migrations and upgrades including regular system updates, access control management, and SELinux configuration. </li>
              <li>Contributed 50+ Linux-specific articles to the knowledge base, reducing repeat tickets by 15% </li>
              <li>Mentored 5 junior technicians in Linux fundamentals and best practices, reducing their ramp-up time by 30% </li>
              <li>Received 'Employee of the Quarter' award for implementing new remote support tools, increasing remote resolution efficiency by 25% Conducted regular security audits and vulnerability assessments, patching critical vulnerabilities within 24 hours of discovery </li>
              <li>Implemented and managed centralized logging solution using Rsyslog and Logstash, improving troubleshooting capabilities </li>
              <li>Optimized MySQL and PostgreSQL databases, resulting in a 30% improvement in query performance </li>
              <li>Assisted in the design and implementation of a disaster recovery plan, including offsite backups and failover procedures </li>
              <li>Deploy and configure SFTP servers on Redhat 8,9 distribution. </li>
              <li>Configuring RedHat 8, 9 Server to STIG benchmark with Oscap and Ansible playbooks. </li>
              <li>Harden server by removing or modifying various cmd services, selinux, sshd, and grub. </li>
              <li>Executed Ansible to manage all existing servers and automate build/configuration of new servers </li>
              <li>Migrated data, applications, and configurations to RHEL 8, ensuring compatibility and minimal downtime </li>
              <li>Edit and configure Linux server template on Vmware. </li>
              <li>Configure Ansible Dynamic inventory for Vmware host. </li>
              <li>Create an Ansible Playbook that hardens servers. </li>
              <li>Develop Ansible playbook that removes the BigFix application. </li>
              <li>Create an Ansible playbook that adds servers to Red Hat Satellite. </li>
              <li>User Ansible to automate day to day tasks. </li>
              <li>Work with the network team to identify network bottlenecks with external clients. </li>
              <li>Patch Linux servers with Red Hat Satellite and Tanium. </li>
              <li>Troubleshoot Samba server outages. </li>
              <li>Configure developer application as a Systemd unit for auto restart, after server patching. </li>
              <li>Modify Bash scripts on Linux servers. </li>
              <li>Open ports on firewall-cmd. </li>
              <li>Configure Rundeck application and setup ACL policy for Developer and Helpdesk users. </li>
              <li>Handle day to day server builds for Red Hat 7, 8, 9. </li>
              <li>Maintained RHEL 7/6 systems `:width: ,across zLinux and VMware platforms, including performance monitoring, resolving network issues and tuning the system using tools such as top, iostat, vmstat, netstat, sar. </li>
              <li>Configured and managed Red hat satellite Network server, performing package management tasks and errata updates. </li>
              <li>Performing installation, configuration, access management, and file system management. </li>
              <li>Performed multi-node software deployment, ad hoc task execution and configuration management using ansible. </li>
              <li>Performing patching, upgrades and security support with extensive troubleshooting of OS and application issues. </li>
              <li>Performance tuning on OS and hardware, and supported oracle maintenance of zLinux systems and VMware machines </li>
              <li>Maintained and operated VMware Virtual Machines, including creating VMs from scratch and from templates and assisted troubleshooting applications. </li>
              <li>Utilized configuration & automation tools such as ansible. </li>
              <li>Played a pivotal role in maintaining and optimizing RHEL systems across zLinux and VMware platforms</li>
            </ul>
          </ResumeCard>

          <ResumeCard
            title="Linux Systems Administrator / Engineer"
            subTitle="Highmark (Sept 2019 - Feb 2023)"
            result="Success"
          >
            <ul className="list-disc pl-4">
              <li>Installation & Configuration of RHEL, Fedora Linux, and CentOS </li>
              <li>Performed daily maintenance & system administration for Linux Infrastructure </li>
              <li>Management of User accounts, System security, kernel performance monitoring and tuning </li>
              <li>Worked in Dev, QA, UAT, Regression and Production environments for backup and around the clock support </li>
              <li>Planned, documented, reviewed, and maintained system administration guidelines and policies </li>
              <li>Performed multi-node software deployment, ad-hoc command execution, and configuration management using Ansible </li>
              <li>Managing package install/upgrades using YUM and RPM </li>
              <li>Performed data migration across multiple UNIX/Linux servers, and Windows Servers </li>
              <li>Worked on VMware vSphere and dealt with ESX, ESXi bare metal servers </li>
              <li>Created and deployed Shell scripts to automate daily repetitive activities </li>
              <li>Configured shell scripts and Cronjobs for regular and periodic tasks as well as system administration jobs </li>
              <li>Regularly participated in meetings for Hardware and software evaluation, recommendation, and vendor management </li>
              <li>Extensively worked with Business, Application, Database, Network and SAN Team for project requirements </li>
              <li>Installation, configuration, and maintenance of web servers, application servers, and database servers with Linux </li>
              <li>Designed and maintain a sophisticated home lab running multiple Linux distributions (CentOS, ARCH, Ubuntu), simulating enterprise-level environments </li>
              <li>Implemented and manage Docker containers for 10+ services, including Plex media server, Nextcloud, and GitLab, improving resource utilization by 40% </li>
              <li>Developed comprehensive bash scripts for daily backups, reducing manual intervention by 90% and ensuring data integrity </li>
              <li>Configured and maintain Nginx reverse proxy for secure access to home services, implementing SSL/TLS encryption and load balancing </li>
              <li>Created custom reporting and monitoring tools using Prometheus and Grafana, enhancing system visibility and reducing incident response time by 50% - Implemented robust error logging and notification system using ELK stack, improving overall reliability and facilitating quick troubleshooting </li>
              <li>Orchestrated multi-node Kubernetes cluster for testing and development of microservices architectures </li>
              <li>Automated system updates and patch management using Ansible, ensuring 100% compliance with security best practices </li>
              <li>Executed Bash scripts which automated and streamlined infrastructure-wide Automation </li>
              <li>Manage complete life-cycle of Linux servers including CentOS and Red Hat Enterprise Linux Physical and Virtual Servers via Vmware deployments and Baremetal </li>
              <li>Provision and configure servers on Baremetal and VMware platforms using custom Templates </li>
              <li>Experience in installation of Operating Systems, Packages and Patches, Manage and maintain user accounts, adding Peripherals, System Security, backup/recovery, performance tuning, troubleshooting at various levels  </li>
              <li>Install, configure, and used GitHub for regular repositories for access </li>
              <li>Experience in source code management like Git using GitHub to manage repositories and various programming files </li>
              <li>Executed Ansible to manage all existing servers and automate build/configuration of new Servers </li>
              <li>Build new Virtual machine and physical server IP bonding for load balancing and failover, firewall, SELinux </li>
              <li>Manage and administer Linux systems for ongoing support using automation tools like Ansible and Bash scripts </li>
              <li>Configure and troubleshoot networking as well as access issues to the servers </li>
              <li>Managed and monitored processes by starting/stopping/killing various processes/sub-processes </li>
              <li>Performed transferring files from one system to another using FTP, SFTP, IPswitch, and SCP. </li>
              <li>Planned, documented, reviewed, and maintained system administration guidelines and policies. </li>
              <li>Utilized Ansible and Ansible Tower as Configuration management tool, to automate repetitive tasks, deploy critical application, and proactively manage changes. </li>
            </ul>
          </ResumeCard>

          <ResumeCard
            title="IT Team Leader"
            subTitle="U.S Army (Jan 2012 - Mar 2019)"
            result="Success"
          >
            <ul className="list-disc pl-4">
              <li>Leadership: Led diverse teams in high-stress environments, honing skills in motivation, delegation, and conflict resolution, essential for guiding cross-functional IT teams. </li>
              <li>Discipline and Attention to Detail: Cultivated a strong work ethic and meticulous attention to detail while adhering to strict protocols and procedures, ensuring high-quality outcomes in all tasks. </li>
              <li>Adaptability: Thrived in rapidly changing situations, developing the ability to quickly learn new technologies and adapt strategies to meet evolving challenges. </li>
              <li>Communication: Enhanced verbal and written communication skills by delivering clear instructions and conducting briefings, facilitating effective collaboration with stakeholders at all levels. </li>
              <li>Problem Solving: Engaged in critical thinking and strategic planning to assess and resolve complex issues, fostering a proactive approach to identifying and mitigating potential challenges. </li>
              <li>Troubleshooting technical issues that arise </li>
              <li>Provision Filesystem space with various file systems such as Ext 4, Ext 3, Ext 2 </li>
              <li>Configure on TCP/IP network configuration </li>
              <li>Installed, Configured and Maintained Red Hat Servers at multiple Data Centers </li>
              <li>Extensive experience with Red Hat Enterprise Linux 5, 6 </li>
              <li>Partitioned and formatted raw devices using fdisk </li>
              <li>Document and maintain the inventory using asset management techniques </li>
              <li>Experience industry standard providing 24/7 support for issues arising in productions for mission critical and non-production systems </li>
              <li>Created users, manage user permissions, maintain user and file system quota on RHEL servers </li>
              <li>Defined and setup Network/Local printers, and installed client/server applications </li>
              <li>Strong experience racking and cabling servers and replacing any faulty hardware </li>
              <li>Experience providing Unix support to maintain systems in a world-class production data center </li>
              <li>Decommissioning of servers, removing from rails and moving to secure cancellation location, removing all related cables and switch information to use for new customer </li>
              <li>Assigned sudo permissions for users to access the root privileges </li>
              <li>Monitored Linux systems using various tools such as Nagios </li>
              <li>Troubleshooting hardware and software related issues for RHEL Servers </li>
            </ul>
          </ResumeCard>

          <ResumeCard
            title="Certifications"
            subTitle="Certifications in Progress"
            result="Alsways Learning"
          >
            <ul className="list-disc pl-4">
              <li>CompTia Linux+ obtained in March 2024.</li>
              <li>Red Hat Certified Systems Administrator(RHCSA). In Progress. </li>
              <li>Microsoft Certified: Azure Administrator Associate. In Progress. </li>
              <li>Red Hat Certified Engineer(RHCE). In Progress. </li>
            </ul>
          </ResumeCard>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
