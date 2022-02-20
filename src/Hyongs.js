import { v4 } from "uuid";

const hyongs = [
    {
        name: "Chon-ji",
        moves: 19,
        id: 1,
        uuid: v4(),
        moveTypes: ["had-dan-makki", "chung-dan-makki", "kwon-chon-chirugie"],
        moveStructure: [
            "had-dan-makki", 
            "kwon-chon-chirugie", 
            "had-dan-makki", 
            "kwon-chon-chirugie", 
            "had-dan-makki", 
            "kwon-chon-chirugie", 
            "had-dan-makki", 
            "kwon-chon-chirugie", 
            "chung-dan-makki", 
            "kwon-chon-chirugie", 
            "chung-dan-makki", 
            "kwon-chon-chirugie", 
            "chung-dan-makki", 
            "kwon-chon-chirugie", 
            "chung-dan-makki", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie"
        ]
    },
    {
        name: "Dan-gun",
        moves: 21,
        id: 2,
        uuid: v4(),
        moveTypes: ["had-dan-makki", "kwon-chon-chirugie", "sudo-makki", "san-dan-makki", "chung-dan-san-dan-makki"],
        moveStructure: [
            "sudo-makki", 
            "kwon-chon-chirugie", 
            "sudo-makki", 
            "kwon-chon-chirugie", 
            "had-dan-makki", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "chung-dan-san-dan-makki", 
            "kwon-chon-chirugie", 
            "chung-dan-san-dan-makki", 
            "kwon-chon-chirugie", 
            "ha-dan-makki", 
            "san-dan-makki", 
            "san-dan-makki", 
            "san-dan-makki", 
            "san-dan-makki", 
            "sudo", 
            "kwon-chon-chirugie",
            "sudo", 
            "kwon-chon-chirugie"
        ]
    },
    {
        name: "To-San",
        moves: 24,
        id: 3,
        uuid: v4(),
        moveTypes: ["sudo", "ap-chaggi", "kwon-chon-chirugie", "ha-dan-makki", "sudo-makki", "yok-chung-dan-makki", "doppel-yok-chung-dan-makki", "san-dan-makki", "fingerstich", "umgedrehter fingerstich", "sudo-makki", "handrückenschlag auf die schläfe", "ausholblock"],
        moveStructure: [
            "yok-chung-dan-makki", 
            "kwon-chon-chirugie", 
            "yok-chung-dan-makki", 
            "kwon-chon-chirugie", 
            "sudo-makki", 
            "fingerstich", 
            "umgedrehter fingerstich", 
            "handrückenschlag (links)", 
            "handrückenschlag (rechts)",
            "yok-chung-dan-makki", 
            "kwon-chon-chirugie", 
            "yok-chung-dan-makki", 
            "kwon-chon-chirugie",  
            "ausholblock", 
            "doppel-yok-chung-dan-makki(links)", 
            "ap-chaggi", 
            "kwon-chon-chirugie(rechts)", 
            "kwon-chon-chirugie(links)",
            "ausholblock", 
            "doppel-yok-chung-dan-makki(rechts)", 
            "ap-chaggi", 
            "kwon-chon-chirugie(links)", 
            "kwon-chon-chirugie(rechts)",  
            "ha-dan-makki", 
            "san-dan-makki", 
            "san-dan-makki", 
            "sudo", 
            "sudo", 
        ]
    },

    {
        name: "Won-Hyo",
        moves: 28,
        id: 4,
        uuid: v4(),
        moveTypes: ["chung-dan-san-dan-makki", "kwon-chon-chirugie", "yop-chaggi", "sudo-makki", "fingerstich", "doppel ausholblock", "san-dan-makki", "chung-dan-makki","ap-chakki", "kampfstellung"],
        moveStructure: [
            "chung-dan-san-dan-makki", 
            "kwon-chon-chirugie", 
            "chung-dan-san-dan-makki", 
            "kwon-chon-chirugie", 
            "yop-chaggi", 
            "sudo-makki", 
            "sudo-makki",
            "sudo-makki", 
            "fingerstich", 
            "chung-dan-san-dan-makki", 
            "kwon-chon-chirugie", 
            "chung-dan-san-dan-makki", 
            "kwon-chon-chirugie", 
            "yok-chung-dan-makki", 
            "kwon-chon-chirugie",  
            "doppel ausholblock", 
            "san-dan-makki", 
            "chung-dan-makki", 
            "ap-chakki", 
            "doppel ausholblock", 
            "san-dan-makki", 
            "chung-dan-makki", 
            "ap-chaggi", 
            "yop-chaggi", 
            "kampfstellung",  
            "kampfstellung", 

        ]
    },

    {
        name: "Yul-Kok",
        moves: 38,
        id: 5,
        uuid: v4(),
        moveTypes: ["kwon-chon-chirugie", "doppel-yok-chung-dan-makki", "ap-chagi", "wischblock", "yop-chagi", "elbogenstoß", "sudon-chung-san-dan-makki", "fingerstich", "chung-dan-makki", "handrückenschlag", "chung-dan-makki mit elbogen",],
        moveStructure: [
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "doppel-yok-chung-dan-makki",
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "ap-chagi", 
            "doppel-yok-chung-dan-makki", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "ap-chagi", 
            "wischblock", 
            "wischblock", 
            "kwon-chon-chirugie",  
            "wischblock", 
            "wischblock", 
            "kwon-chon-chirugie", 
            "yop-chakki", 
            "elbogenstoß", 
            "yop-chakki", 
            "elbogenstoß", 
            "ap-chaggi", 
            "yop-chaggi", 
            "sudon-chung-san-dan-makki",  
            "fingerstich", 
            "sudon-chung-san-dan-makki",  
            "fingerstich", 
            "chung-dan-makki", 
            "handrückenschlag",
            "chung-dan-makki", 
            "handrückenschlag",
            "chung-dan-makki mit elbogen",
            "chung-dan-makki mit elbogen",
        ]
    },
    {
        name: "Yung-Gun",
        moves: 32,
        id: 6,
        uuid: v4(),
        moveTypes: ["kwon-chon-chirugie", "doppel-yok-chung-dan-makki", "ap-chagi", "wischblock", "yop-chagi", "elbogenstoß", "sudon-chung-san-dan-makki", "fingerstich", "chung-dan-makki", "handrückenschlag", "chung-dan-makki mit elbogen",],
        moveStructure: [
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "doppel-yok-chung-dan-makki",
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "ap-chagi", 
            "doppel-yok-chung-dan-makki", 
            "kwon-chon-chirugie", 
            "kwon-chon-chirugie", 
            "ap-chagi", 
            "wischblock", 
            "wischblock", 
            "kwon-chon-chirugie",  
            "wischblock", 
            "wischblock", 
            "kwon-chon-chirugie", 
            "yop-chakki", 
            "elbogenstoß", 
            "yop-chakki", 
            "elbogenstoß", 
            "ap-chaggi", 
            "yop-chaggi", 
            "sudon-chung-san-dan-makki",  
            "fingerstich", 
            "sudon-chung-san-dan-makki",  
            "fingerstich", 
            "chung-dan-makki", 
            "handrückenschlag",
            "chung-dan-makki", 
            "handrückenschlag",
            "chung-dan-makki mit elbogen",
            "chung-dan-makki mit elbogen",
        ]
    }
];

export default hyongs;