import { FaShieldAlt, FaSimplybuilt, FaSketch } from "react-icons/fa"
export const Features = (props) => {
  return (
    <div id="features">
      <div className="contain">
        <div className="col-md-4">
          <span>
            <FaShieldAlt />
          </span>
          <h3>COLLECTIBILITY</h3>
          <p>
            NFTs are organized into COLLECTIONS and SERIES. Collect an entire
            series and unlock additional benefits. Complete an entire collection
            and unlock even more!
          </p>
        </div>
        <div className="col-md-4">
          <span>
            <FaSketch />
          </span>
          <h3>RARITY</h3>
          <p>
            Memories are one of the rarest commodities on Earth. We limit the
            number of NFTs minted to honor the scarcity and uniqueness of each
            memory.
          </p>
        </div>
        <div className="col-md-4">
          <span>
            <FaSimplybuilt style={{ transform: "rotate(180deg)" }} />
          </span>
          <h3>UTILITY</h3>
          <p>
            Every Memory Mint NFT grants its holder access to their very own,
            customizable Memory Mint Vault in the Metaverse. Use it to store and
            showcase your NFTs and invite guests inside to view—and
            experience—your collection.
          </p>
        </div>
      </div>
    </div>
  )
}
