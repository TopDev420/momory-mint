import Faq from "react-faq-component"
import { FaPlusCircle } from "react-icons/fa"

const data = {
  rows: [
    {
      title: "WHAT BLOCKCHAIN ARE MEMORY MINTS MINTED ON?",
      content: `Memory Mints are ERC-721 Tokens minted on the Etherium Mainnet.`
    },
    {
      title:
        "WHAT’S THE DIFFERENCE BETWEEN A MEMORY, A DREAM AND AN EXPERIENCE?",
      content: (
        <p>
          <span>
            We don’t claim to know the answer to that, but here are some links
            to people who do:
          </span>
          <br />
          <a href="https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte">
            https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte
          </a>
          <br />
          <a href="https://en.wikipedia.org/wiki/Alfred_Adler">
            https://en.wikipedia.org/wiki/Alfred_Adler
          </a>
          <br />
          <a href="https://en.wikipedia.org/wiki/Joseph_Campbell">
            https://en.wikipedia.org/wiki/Joseph_Campbell
          </a>
          <br />
        </p>
      )
    },
    {
      title: "WHAT IS A MEMORY MINT?",
      content: `A Memory Mint is an experience captured in 360-video that we turn into an Immersive NFT.`
    },
    {
      title: "WHAT’S AN IMMERSIVE NFT?",
      content: `An Immersive NFT a 3D model baked with 360 images that tell a story.  
      Like any NFT, they can be viewed in any wallet on any mobile device or desktop computer.  
      Unlike other NFTs, though, Immersive NFTs can also be viewed in a virtual reality headset, 
      allowing you to experience the memory in all 360 degrees.`
    },
    {
      title: "HOW DO YOU MAKE AN IMMERSIVE NFT?",
      content: `Creating an Immersive NFT is a multi-step process that involves 
      360-imaging hardware and stitching software, HDR image processing and 3D modeling.  
      The decentralized method of creating Memory Mint 
      Immersive NFTs ensures that each NFT is a unique work of art.`
    },
    {
      title: "WHAT HAPPENS TO THE SOURCE FILES AFTER AN NFT IS MINTED?",
      content: `Whenever possible, original source files are deleted and images archived after minting.  
      In some instances, presets and modeling data are preserved for future creation.`
    },
    {
      title: "WHEN WILL THE PERSONALIZED MEMORY VAULTS LAUNCH?",
      content: `The first generation of personalized Memory 
      Mints will launch within sixth months of the close of our first sale, “The Sommer Shiels Collection”.`
    },
    {
      title: "HOW IS MY MEMORY MINT VAULT A TICKET TO THE METAVERSE?",
      content: `Your Memory Mint Vault will be a three-dimensional WebXR environment that can be accessed via any web browser.  
      But, for a truly immersive experience, you can also access your mint from a virtual reality headset.  
      Once inside, you can move around your space via an avatar, as well as invite friends and guests inside your Vault to experience your NFT collection.<br><br>

      The Metaverse is many different things to many different people.  Much like the World Wide Web is a networked collection of websites, 
      we see the Metaverse as any networked collection of three-dimensional, virtual environments.  
      In that sense, your Memory Mint Vault can function as the perfect home base for your Metaverse exploration.`
    }
  ]
}

const config = {
  animate: true,
  arrowIcon: <FaPlusCircle></FaPlusCircle>,
  tabFocus: true
}

export const Explanation = (props) => {
  return (
    <div id="explanation">
      <div className="contain">
        <div className="title">
          <h1>FAQ</h1>
        </div>
        <Faq data={data} config={config} />
      </div>
    </div>
  )
}
