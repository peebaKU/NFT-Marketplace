// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarketplace is ReentrancyGuard {
    struct Listing {
        uint256 price;
        address seller;
    }

    mapping(address => mapping(uint256 => Listing)) private listings;

    function listNFT(address nftContract, uint256 tokenId, uint256 price) external {
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        listings[nftContract][tokenId] = Listing(price, msg.sender);
    }

    function buyNFT(address nftContract, uint256 tokenId) external payable nonReentrant {
        Listing memory item = listings[nftContract][tokenId];
        require(msg.value >= item.price, "Insufficient payment");

        delete listings[nftContract][tokenId];
        payable(item.seller).transfer(item.price);
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
    }
}
