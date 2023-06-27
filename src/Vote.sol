pragma solidity ^0.8.0;

contract VotingApp {
    // Structure to represent a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    // Mapping to store candidates
    mapping(uint => Candidate) public candidates;
    // Mapping to keep track of voter's eligibility
    mapping(address => bool) public voters;
    // Event triggered when a vote is cast
    event VoteCast(uint indexed candidateId);
    // Function to add candidates to the voting app
    function addCandidate(uint _candidateId, string memory _name) public {
        require(!voters[msg.sender], "Only the contract owner can add candidates.");
        candidates[_candidateId] = Candidate(_candidateId, _name, 0);
    }
    // Function to cast a vote for a candidate
    function vote(uint _candidateId) public {
        require(!voters[msg.sender], "You have already voted.");
        Candidate storage candidate = candidates[_candidateId];
        require(candidate.id != 0, "Invalid candidate.");
        candidate.voteCount++;
        voters[msg.sender] = true;
        emit VoteCast(_candidateId);
    }
    // Function to get the vote count for a candidate
    function getVoteCount(uint _candidateId) public view returns (uint) {
        return candidates[_candidateId].voteCount;
    }
}
