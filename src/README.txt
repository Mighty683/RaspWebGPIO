TERMS OF USE: USE OF THIS SOFTWARE IS GOVERNED BY THE SOFTWARE LICENSING AND DISTRIBUTION AGREEMENT
STATED IN THE DOCUMENTS license/Predix_EULA.pdf (THESE DOCUMENTS ARE PART OF THIS
SOFTWARE PACKAGE). BY USING THIS SOFTWARE, YOU AGREE THAT YOUR USE OF THE SOFTWARE IS GOVERNED BY
LICENSING AND DISTRIBUTION AGREEMENT STATED IN THESE DOCUMENTS. IF YOU DO NOT FULLY AGREE WITH THE
TERMS OF THE AGREEMENTS, YOU ARE NOT AUTHORIZED TO USE THE SOFTWARE AND MUST REMOVE THE SOFTWARE
IMMEDIATELY.

Predix Machine is a lightweight kernel that can be deployed on various OSGi
containers. Predix Machine should be unzipped and placed in your software development workspace. 
      
Additional README files can be found in sub folders. 

=====================================================================
Folder Structure
=====================================================================

/--
    /appdata - Application created data. This can include git repositories or databases.
    
    /bin - Top level start and stop scripts for Predix Machine choosing one of two methods to start Predix Machine:
        Yeti, which allows installing updates from EdgeManager, or just starting the Predix Machine container without updates.
        /service_installation - Scripts and executables to set up Predix Machine as a service
    
    /configuration - bundle configuration, property files and system properties 
        /machine - machine container configuration
        /install - (optional) installation scripts used by yeti to install configuration on the device.
     
    /installations - (optional) location for yeti to monitor for install zips.
    
    /licence - legal documents
    
    /logs - log files if file logging is setup. These will be grouped by application.
        /installations - (optional) Yeti installation logs
        /machine - Logs for Machine applications
        /mbsa - (optional) mbsa logs
    
    /machine- The ProSyst container
        /bin
            /predix - contains startup scripts. start by running "start_container.sh"
            /vms
                boot.ini - list of ProSyst bundles and their start order.
                /jdk
                    server or server.bat - ProSyst start script.
                    /storage - framework runtime storage.  During a clean start, the contents of this folder will be deleted.
        /bundles - the ProSyst bundles
        /config - used for storing configuration for OSGi meta-types.
        /install - (optional) installation scripts used by yeti to install machine on the device.
        /lib  - native libraries and frameworks
    
    /mbsa - (optional) if the mbsa option is selected
        /bin - start/stop scripts
        /install - installation scripts used by yeti to install on the device.
        /lib - native libraries and frameworks

    /security - setup bundle level security and key and trust stores
    
    /yeti - (optional) process to monitor the installations folder and install packages from the Device Management in the cloud.

    