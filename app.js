// NBA球员数据
const nbaData = {
    active: [
        { name: "LeBron James", chinese: "勒布朗·詹姆斯", team: "湖人", position: "SF" },
        { name: "Stephen Curry", chinese: "斯蒂芬·库里", team: "勇士", position: "PG" },
        { name: "Kevin Durant", chinese: "凯文·杜兰特", team: "太阳", position: "SF" },
        { name: "Giannis Antetokounmpo", chinese: "扬尼斯·安特托昆博", team: "雄鹿", position: "PF" },
        { name: "Luka Doncic", chinese: "卢卡·东契奇", team: "独行侠", position: "PG" },
        { name: "Anthony Davis", chinese: "安东尼·戴维斯", team: "湖人", position: "PF" },
        { name: "Jayson Tatum", chinese: "杰森·塔图姆", team: "凯尔特人", position: "SF" },
        { name: "Joel Embiid", chinese: "乔尔·恩比德", team: "76人", position: "C" },
        { name: "Nikola Jokic", chinese: "尼古拉·约基奇", team: "掘金", position: "C" },
        { name: "Devin Booker", chinese: "德文·布克", team: "太阳", position: "SG" },
        { name: "Kawhi Leonard", chinese: "科怀·伦纳德", team: "快船", position: "SF" },
        { name: "Paul George", chinese: "保罗·乔治", team: "快船", position: "SF" },
        { name: "Damian Lillard", chinese: "达米安·利拉德", team: "雄鹿", position: "PG" },
        { name: "Jimmy Butler", chinese: "吉米·巴特勒", team: "热火", position: "SF" },
        { name: "Trae Young", chinese: "特雷·杨", team: "老鹰", position: "PG" }
    ],
    
    classic: [
        { name: "Kobe Bryant", chinese: "科比·布莱恩特", team: "湖人", position: "SG" },
        { name: "Michael Jordan", chinese: "迈克尔·乔丹", team: "公牛", position: "SG" },
        { name: "Shaquille O'Neal", chinese: "沙奎尔·奥尼尔", team: "湖人", position: "C" },
        { name: "Tim Duncan", chinese: "蒂姆·邓肯", team: "马刺", position: "PF" },
        { name: "Allen Iverson", chinese: "阿伦·艾弗森", team: "76人", position: "PG" },
        { name: "Yao Ming", chinese: "姚明", team: "火箭", position: "C" },
        { name: "Dirk Nowitzki", chinese: "德克·诺维茨基", team: "独行侠", position: "PF" },
        { name: "Magic Johnson", chinese: "魔术师约翰逊", team: "湖人", position: "PG" },
        { name: "Larry Bird", chinese: "拉里·伯德", team: "凯尔特人", position: "SF" },
        { name: "Hakeem Olajuwon", chinese: "哈基姆·奥拉朱旺", team: "火箭", position: "C" }
    ]
};

// 球队列表
const teams = ["湖人", "勇士", "凯尔特人", "热火", "雄鹿", "76人", "掘金", "太阳", "快船", "篮网"];

// 工具函数
function getRandomPlayers(playerType, count) {
    const playerPool = nbaData[playerType] || nbaData.active;
    const shuffled = [...playerPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function getRandomTeam() {
    return teams[Math.floor(Math.random() * teams.length)];
}

// 生成对决
function generateMatchup() {
    const playerType = document.querySelector('input[name="playerType"]:checked').value;
    const loading = document.getElementById('loading');
    const resultContainer = document.getElementById('resultContainer');
    const matchupResult = document.getElementById('matchupResult');
    const teamsResult = document.getElementById('teamsResult');
    
    // 显示加载和结果容器
    resultContainer.style.display = 'block';
    loading.style.display = 'block';
    matchupResult.style.display = 'none';
    teamsResult.style.display = 'none';
    
    // 模拟加载效果
    setTimeout(() => {
        const players = getRandomPlayers(playerType, 4);
        const team1Name = getRandomTeam();
        const team2Name = getRandomTeam();
        
        // 更新队伍1
        document.getElementById('team1Name').textContent = team1Name;
        const team1PlayersDiv = document.getElementById('team1Players');
        team1PlayersDiv.innerHTML = players.slice(0, 2).map(player => `
            <div class="player-card">
                <div class="player-name">${player.name}</div>
                <div class="player-details">${player.chinese} • ${player.team} • ${player.position}</div>
            </div>
        `).join('');
        
        // 更新队伍2
        document.getElementById('team2Name').textContent = team2Name;
        const team2PlayersDiv = document.getElementById('team2Players');
        team2PlayersDiv.innerHTML = players.slice(2, 4).map(player => `
            <div class="player-card">
                <div class="player-name">${player.name}</div>
                <div class="player-details">${player.chinese} • ${player.team} • ${player.position}</div>
            </div>
        `).join('');
        
        // 显示结果
        loading.style.display = 'none';
        matchupResult.style.display = 'block';
    }, 800);
}

// 生成球队
function generateTeams() {
    const playerType = document.querySelector('input[name="playerType"]:checked').value;
    const loading = document.getElementById('loading');
    const resultContainer = document.getElementById('resultContainer');
    const matchupResult = document.getElementById('matchupResult');
    const teamsResult = document.getElementById('teamsResult');
    
    // 显示加载和结果容器
    resultContainer.style.display = 'block';
    loading.style.display = 'block';
    matchupResult.style.display = 'none';
    teamsResult.style.display = 'none';
    
    // 模拟加载效果
    setTimeout(() => {
        const players = getRandomPlayers(playerType, 10);
        const teamAName = getRandomTeam();
        const teamBName = getRandomTeam();
        
        // 更新队伍A
        document.getElementById('teamA').textContent = teamAName;
        const teamAPlayersDiv = document.getElementById('teamAPlayers');
        teamAPlayersDiv.innerHTML = players.slice(0, 5).map(player => `
            <div class="player-card">
                <div class="player-name">${player.name}</div>
                <div class="player-details">${player.chinese} • ${player.position}</div>
            </div>
        `).join('');
        
        // 更新队伍B
        document.getElementById('teamB').textContent = teamBName;
        const teamBPlayersDiv = document.getElementById('teamBPlayers');
        teamBPlayersDiv.innerHTML = players.slice(5, 10).map(player => `
            <div class="player-card">
                <div class="player-name">${player.name}</div>
                <div class="player-details">${player.chinese} • ${player.position}</div>
            </div>
        `).join('');
        
        // 显示结果
        loading.style.display = 'none';
        teamsResult.style.display = 'block';
    }, 800);
}

// 分享功能
function shareResult() {
    const text = `🏀 看我生成的NBA球员对决！\n快来试试这个免费的NBA球员生成器吧！`;
    const url = window.location.href;
    
    if (navigator.share) {
        // 如果浏览器支持分享API
        navigator.share({
            title: 'NBA球员生成器',
            text: text,
            url: url
        });
    } else {
        // 如果不支持，复制链接到剪贴板
        navigator.clipboard.writeText(url + '\n' + text).then(() => {
            alert('链接已复制到剪贴板！快去分享给朋友吧！');
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 模式切换
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const mode = this.dataset.mode;
            const generateBtn = document.getElementById('generateBtn');
            
            if (mode === 'matchup') {
                generateBtn.textContent = '生成对决';
                generateBtn.onclick = generateMatchup;
            } else {
                generateBtn.textContent = '生成球队';
                generateBtn.onclick = generateTeams;
            }
        });
    });
    
    // 默认绑定生成对决
    document.getElementById('generateBtn').onclick = generateMatchup;
});
