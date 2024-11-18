// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NewsPortal {
    struct News {
        uint id;
        string title;
        string ipfsHash;
        address author;
        uint timestamp;
    }

    News[] public newsList;
    uint public newsCount;

    event NewsPublished(uint id, string title, string ipfsHash, address author, uint timestamp);

    function publishNews(string memory _title, string memory _ipfsHash) public {
        newsCount++;
        newsList.push(News(newsCount, _title, _ipfsHash, msg.sender, block.timestamp));
        emit NewsPublished(newsCount, _title, _ipfsHash, msg.sender, block.timestamp);
    }

    function getNews(uint _id) public view returns (string memory, string memory, address, uint) {
        News memory newsItem = newsList[_id - 1];
        return (newsItem.title, newsItem.ipfsHash, newsItem.author, newsItem.timestamp);
    }

    function getAllNews() public view returns (News[] memory) {
        return newsList;
    }
}
