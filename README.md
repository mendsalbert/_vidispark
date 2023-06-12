<p align="center">
  <a href="" title="Project Initiator">
    <img src="https://bafybeid5lh3n5s7wtcmwjupttbsdagoozs5psi4wgzwdj5s5l2y4g6guwe.ipfs.w3s.link/Group%201.png" width="20px" alt="Project Initiator"/>
  </a>
</p>
<h1 align="center">VidisPark</h1>

<p align="center">
    <a href="https://www.youtube.com/watch?v=FlKs6_5q5hk" title="">🖥️ Video</a>
    .
    <a href="https://vidispark.vercel.app" title="">🔗 Website</a>
    ·
    <a href="https://github.com/mendsalbert/_vidispark" title="">📂 Repo</a>
    ·
    <a href="https://github.com/mendsalbert/_vidispark" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

## Problem

In today's digital age, content creators face numerous challenges that hinder their growth and success. These challenges include censorship, limited monetization options, and complex platform requirements. As a result, many talented creators struggle to reach their audience and generate income from their content. Consequently, creators are left with no choice but to join centralized platforms like YouTube, Twitch, and similar platforms.

## Solution: Vidispark and its Features

Vidispark is a decentralized platform that empowers creators to produce online content across a wide range of categories, including:

- 🎭 Entertainment
- 🎵 Music
- ⚽ Sports
- 🎮 Gaming
- 📚 Education
- 💪 Health and Fitness
- 👗 Fashion and Beauty

Vidispark enables creators to maintain full ownership of their content, addressing the issue of centralization in creative content distribution. The platform serves two main user groups: creators and users. Creators produce content based on user interests, and users can tip, bookmark, or save videos for future viewing.

The Vidispark team has introduced its native token, **VDSP**, built on the Theta blockchain network. This token serves as a means of providing financial support to creators and functions as the primary cryptocurrency within the application.

Vidispark is available in two forms: a web platform and a mobile app. We prioritize user experience across both platforms to ensure seamless content consumption.

Key features of Vidispark include:
-MetaVerse functionality
-AI assistance for content planning
-A marketplace where investors can promote their businesses to creators and streamers
img of web and mob app

## Architecture and Technology Stack

<img src="https://bafybeigkw4a3l4ucnmqyyi2s42rvjvm53cjtzo7dg72smixtpyljo7bphy.ipfs.w3s.link/Screenshot%202023-05-26%20at%205.34.08%20PM.png" alt="Sample Image" width="1000" style="width: 600px;">
Vidispark is primarily built using JavaScript. All data stored within the application is decentralized. The web APIs power both the website and the mobile app. Images are stored on IPFS (InterPlanetary File System), while videos are stored on the ThetaVideoAPI. User and creator details are stored in a decentralized database provided by Weave. Creators also utilize OpenAI for content caption generation and planning. Additionally, Vidispark incorporates MetaVerse functionality from fox.com.

Technology Stack & Tools:

    -IDE: Visual Studio Code
    -Web Front-end and Back-end: Next.js, React.js
    -Backend: Next.js
    -Database: Weave
    -File Storage: IPFS
    -Videos: ThetaVideoAPI
    -AI for content planning

A detailed tutorial on how to upload content to Vidispark will be linked in the video or accessible through a provided link.

    Features
    For Creators:

    -Sign up
    -Check wallet balance
    -Receive Vidispark native token (VDSP)
    -View dashboard
    -Utilize AI to generate content
    -Update profile information
    -Manage dashboard
    -Follow other creators
    -Advertise their content

For Users:

    -Sign up
    -Check wallet balance
    -Tip creators
    -View videos
    -Like videos
    -Follow creators
    -And many more features

Below is the link to full technical paper (white paper)
[whitepaper](https://vidispark.vercel.app/white-paper)

Smart Contract Address - 0x7E2e3f0c33ebaC151C946395c6f888b014319d42

## Prerequisite

- [Nodejs](https://nodejs.org/en// "Node") Installed

- [Git](https://git-scm.com/ "Git OFficial") Installed

- [npm](https://www.npmjs.com/ "npm ") Installed

- [Hardhat](https://hardhat.org/ "Hardhat ") Installed

## Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/mendsalbert/_vidispark
```

2. Change the working directory

```Bash
cd vidispark
```

3. Start the local Hardhat node

```Bash
npx hardhat node
```

4. With the network running, deploy the contracts to the local network in a separate terminal window

```Bash
npx hardhat run scripts/deploy.js --network theta
```

5. Start the app

```Bash
npm run start
```

**🎇 You are Ready to Go!**

## Configuration

The chain ID should be 365. If you have a localhost rpc set up, you may need to overwrite it.

<p align="center" title="Project Initiator"><img src="https://bafybeieuh2n62zhzw666m3fe77cc5xlandpfebcmtwyugdqf5b2nkxjmae.ipfs.w3s.link/Screenshot%202023-05-31%20at%2010.14.09%20AM.png" alt="Project Initiator"/></p>

To deploy to Polygon test or main networks, update the configurations located in hardhat.config.js to use a private key and, optionally, deploy to a private RPC like Infura.

```Bash
require('@nomiclabs/hardhat-waffle');
const privateKey = 'xx';
const projectId = 'xx';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 365,
    },
    theta: {
      url: 'https://eth-rpc-api-testnet.thetatoken.org/rpr',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

## Built with

- [Solidity](https://docs.soliditylang.org/en/v0.8.17/ "Solidity"): as Main Coding Language for writing smart contract

- [ReactJs](https://reactjs.org/ "React Js"): as Main Coding Language for Creating The UI components (Front End)

- [TailwindCss](https://tailwindcss.com/ "Tailwind Css"): as Main Coding Language for styling UI components

- [Theta Video API](https://www.thetavideoapi.com/): as the main API for storing videos

- [IPFS](https://ipfs.tech/ "IPFS"): For Storing of files

- [Web3 Storage](https://www.google.com/search?q=web3storage "Web3 Storage"): For Storing of files

- [Github](https://github.com/ "Github") : For Repo Storage and source code management

- [Git](https://git-scm.com/ "Git") : For Version Control System

## Value to the Theta Ecosystem

The Theta ecosystem has experienced rapid growth within the world of decentralization. To ensure its stability, diverse applications and systems need to be implemented. Video and streaming platforms have billions of users, and Vidispark believes the future of decentralization has arrived. By building on the Theta ecosystem, Vidispark contributes to its growth and development.

## Learnings and Challenges

During our journey to develop a fully decentralized video and streaming platform, we discovered that existing platforms typically have at least one centralized component. We take pride in being the first fully decentralized company to implement a decentralized video streaming platform. However, this presented various challenges, including integrating new decentralized platforms like WeaveDB, which required extensive collaboration with the Weave team via GitHub and direct contact.

Each challenge we encountered provided valuable lessons. Despite being college students, our team's passion and dedication enabled us to build this powerful and amazing project within a short timeframe.

We gained an in-depth understanding of the Theta ecosystem and how to utilize its components to solve real-world problems.

## What's next for Vidispark

    Q3 2023:

    - Vidispark Mainnet Launch
    - Vidispark Metaverse Launch
    - Partnerships with Content Creators & Streamers

Q4 2023:

    - Marketing Campaign & Listing on Prominent Exchanges
    - Expanded Partnerships & Continuous Development

Q1 2024:

    - Initial Development of Metaverse and VidiCratch
    - Vidispark Token Public Sale
    - Distribution of NFTs & Virtual Studios

Q2 2024:

    - Hosting of Play-to-Earn Tournaments
    - Creation of Virtual Studios & Virtual Lands
    - Development of Staking and Reward System
