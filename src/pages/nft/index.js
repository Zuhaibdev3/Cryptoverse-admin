import React from "react";
import { SideMenu } from "../../components";
import { Card1, Card2, Card3, Card4 } from "../../images";
import Timer from "./timer";
import Grid from "@mui/material/Grid";
import "./index.css";
import { Ethereum } from "../../svg";
import { Button } from "@mui/material";
const Nft = () => {
  const List = [
    {
      img: Card1,
      title: "ArtCrypto",
    },
    {
      img: Card2,
      title: "ArtCrypto",
    },
    {
      img: Card3,
      title: "ArtCrypto",
    },
    {
      img: Card4,
      title: "ArtCrypto",
    },
    {
      img: Card1,
      title: "ArtCrypto",
    },
    {
      img: Card2,
      title: "ArtCrypto",
    },
    {
      img: Card3,
      title: "ArtCrypto",
    },
    {
      img: Card4,
      title: "ArtCrypto",
    },
    {
      img: Card1,
      title: "ArtCrypto",
    },
    {
      img: Card2,
      title: "ArtCrypto",
    },
    {
      img: Card3,
      title: "ArtCrypto",
    },
    {
      img: Card4,
      title: "ArtCrypto",
    },
    {
      img: Card1,
      title: "ArtCrypto",
    },
    {
      img: Card2,
      title: "ArtCrypto",
    },
    {
      img: Card3,
      title: "ArtCrypto",
    },
    {
      img: Card4,
      title: "ArtCrypto",
    },
  ];
  return (
    <SideMenu title="NFT">
      <Grid container spacing={4}>
        {List.map((val, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
              <div className="nft-card">
                <img src={val.img} />
                <p className="nft-card-title">{val.title}</p>
                <div className="nft-card-eth-main">
                  <div>
                    <img src={Ethereum} />
                    <p>0.25 ETH</p>
                  </div>
                  <p>
                    {index + 1} of {List.length}
                  </p>
                </div>
                <div className="nft-card-footer">
                  <Timer />
                  <Button
                    variant="contained"
                    disableRipple={true}
                    className="nft-buy-btn"
                  >
                    Buy NFT
                  </Button>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </SideMenu>
  );
};
export default Nft;
