# Development environment setup : React Native CLI Approach

   > Development OS : Linux
   > Target OS: Android

## Step 1: Installing the dependencies
    node-version-manager: https://github.com/nvm-sh/nvm#installing-and-updating  
   1. node-version: 18.16.0
   2. npm-version: 9.5.1
   3. react-native-cli: 2.0.1 
      ```bash 

         # Uninstall previously installed a global react-native-cli package, for no unexpected issues:
         npm uninstall -g react-native-cli @react-native-community/cli 

         # Install the react-native-cli globally 
         npm install -g react-native-cli @react-native-community/cli
         
       ``` 
   4. jdk-version: openjdk "11.0.20.1" 2023-08-24 ( React Native recommends version 11 of the Java SE Development Kit (JDK) )
   5. android-studio-version: Android Studio Giraffe | 2022.3.1 | Linux 6.2.0-36-generic

   Setup Node, Java Development Kit and Android Development visit link below ( React Native CLI Approach ):
   https://reactnative.dev/docs/environment-setup?guide=native 

## Step 2: Create a new React Native Project (learning-management-system)

   React Native has a built-in command line interface, which can be use to generate a new project.
   It can accessed it without installing anything globally using npx, which ships with Node.js. 
   
   To create a new React Native project namely "learning-management-system" :

   ```bash 
      npx react-native@latest init learning-management-sytem
   ```

## Step 3: Running this React Native Project Locally : 
   
   ### Clone the repository :
     ```bash 
      # Using ssh
      git clone git@github.com:eshwagadkar/learning-management-system.git   
     ```
   ### Install the dependencies: 

   - Project Environment Setup: Follow Step 1 Only. (Step 2 is for creating a brand new react-native-project, not       
     necessary for a cloned repository. )

   - After clone install the project related npm packages:  ```bash npm install``` 

   ### Running React Native application (locally)

      Open two cli terminals (side-by-side)

      Step 1: Start Metro (using below command) - On one of the cli terminal.
      ```bash npm start```

      Step 2: Start your application (using below command) - On the 2nd cli terminal.
      ```bash npm run android```

   ### Note: If everything is set up correctly, you should see your new app running in your Android emulator
   ### or on a physical device if connected via wireless or usb debugging. 

 






