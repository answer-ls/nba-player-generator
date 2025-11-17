// NBA球员数据
const nbaData = {
    active: [
                // 洛杉矶湖人
                { name: "LeBron James", chinese: "勒布朗·詹姆斯", team: "湖人", position: "SF" },
                { name: "Anthony Davis", chinese: "安东尼·戴维斯", team: "湖人", position: "PF" },
                { name: "D'Angelo Russell", chinese: "德安吉洛·拉塞尔", team: "湖人", position: "PG" },
                { name: "Jarred Vanderbilt", chinese: "贾里德·范德比尔特", team: "湖人", position: "PF" },
                { name: "Rui Hachimura", chinese: "八村塁", team: "湖人", position: "PF" },
                { name: "Austin Reaves", chinese: "奥斯汀·里夫斯", team: "湖人", position: "SG" },
                { name: "Taurean Prince", chinese: "托里恩·普林斯", team: "湖人", position: "SF" },
                { name: "Jaxson Hayes", chinese: "贾克森·海耶斯", team: "湖人", position: "C" },
                { name: "Cam Reddish", chinese: "卡姆·雷迪什", team: "湖人", position: "SF" },
                { name: "Gabe Vincent", chinese: "加布·文森特", team: "湖人", position: "PG" },
                { name: "Christian Wood", chinese: "克里斯蒂安·伍德", team: "湖人", position: "PF" },
                { name: "Max Christie", chinese: "马克斯·克里斯蒂", team: "湖人", position: "SG" },
                { name: "Spencer Dinwiddie", chinese: "斯宾塞·丁威迪", team: "湖人", position: "PG" },

                // 金州勇士
                { name: "Stephen Curry", chinese: "斯蒂芬·库里", team: "勇士", position: "PG" },
                { name: "Klay Thompson", chinese: "克莱·汤普森", team: "勇士", position: "SG" },
                { name: "Draymond Green", chinese: "德雷蒙德·格林", team: "勇士", position: "PF" },
                { name: "Andrew Wiggins", chinese: "安德鲁·威金斯", team: "勇士", position: "SF" },
                { name: "Chris Paul", chinese: "克里斯·保罗", team: "勇士", position: "PG" },
                { name: "Kevon Looney", chinese: "凯文·卢尼", team: "勇士", position: "C" },
                { name: "Jonathan Kuminga", chinese: "乔纳森·库明加", team: "勇士", position: "PF" },
                { name: "Moses Moody", chinese: "摩西·穆迪", team: "勇士", position: "SG" },
                { name: "Gary Payton II", chinese: "加里·佩顿二世", team: "勇士", position: "SG" },
                { name: "Brandin Podziemski", chinese: "布兰丁·波兹姆斯基", team: "勇士", position: "SG" },
                { name: "Dario Saric", chinese: "达里奥·萨里奇", team: "勇士", position: "PF" },
                { name: "Trayce Jackson-Davis", chinese: "特雷斯·杰克逊-戴维斯", team: "勇士", position: "C" },

                // 波士顿凯尔特人
                { name: "Jayson Tatum", chinese: "杰森·塔图姆", team: "凯尔特人", position: "SF" },
                { name: "Jaylen Brown", chinese: "杰伦·布朗", team: "凯尔特人", position: "SG" },
                { name: "Kristaps Porzingis", chinese: "克里斯塔普斯·波尔津吉斯", team: "凯尔特人", position: "C" },
                { name: "Jrue Holiday", chinese: "朱·霍勒迪", team: "凯尔特人", position: "PG" },
                { name: "Derrick White", chinese: "德里克·怀特", team: "凯尔特人", position: "SG" },
                { name: "Al Horford", chinese: "艾尔·霍福德", team: "凯尔特人", position: "C" },
                { name: "Payton Pritchard", chinese: "佩顿·普里查德", team: "凯尔特人", position: "PG" },
                { name: "Sam Hauser", chinese: "山姆·豪泽", team: "凯尔特人", position: "SF" },
                { name: "Oshae Brissett", chinese: "奥沙伊·布里塞特", team: "凯尔特人", position: "SF" },
                { name: "Luke Kornet", chinese: "卢克·科内特", team: "凯尔特人", position: "C" },

                // 迈阿密热火
                { name: "Jimmy Butler", chinese: "吉米·巴特勒", team: "热火", position: "SF" },
                { name: "Bam Adebayo", chinese: "巴姆·阿德巴约", team: "热火", position: "C" },
                { name: "Tyler Herro", chinese: "泰勒·希罗", team: "热火", position: "SG" },
                { name: "Terry Rozier", chinese: "特里·罗齐尔", team: "热火", position: "PG" },
                { name: "Duncan Robinson", chinese: "邓肯·罗宾逊", team: "热火", position: "SG" },
                { name: "Jaime Jaquez Jr.", chinese: "小海梅·哈克斯", team: "热火", position: "SF" },
                { name: "Caleb Martin", chinese: "卡莱布·马丁", team: "热火", position: "SF" },
                { name: "Nikola Jovic", chinese: "尼古拉·约维奇", team: "热火", position: "PF" },
                { name: "Kevin Love", chinese: "凯文·乐福", team: "热火", position: "PF" },
                { name: "Josh Richardson", chinese: "乔什·理查德森", team: "热火", position: "SG" },

                // 密尔沃基雄鹿
                { name: "Giannis Antetokounmpo", chinese: "扬尼斯·安特托昆博", team: "雄鹿", position: "PF" },
                { name: "Damian Lillard", chinese: "达米安·利拉德", team: "雄鹿", position: "PG" },
                { name: "Khris Middleton", chinese: "克里斯·米德尔顿", team: "雄鹿", position: "SF" },
                { name: "Brook Lopez", chinese: "布鲁克·洛佩兹", team: "雄鹿", position: "C" },
                { name: "Bobby Portis", chinese: "博比·波蒂斯", team: "雄鹿", position: "PF" },
                { name: "Malik Beasley", chinese: "马利克·比斯利", team: "雄鹿", position: "SG" },
                { name: "Pat Connaughton", chinese: "帕特·康诺顿", team: "雄鹿", position: "SG" },
                { name: "Jae Crowder", chinese: "杰·克劳德", team: "雄鹿", position: "SF" },
                { name: "MarJon Beauchamp", chinese: "马尔琼·比彻姆", team: "雄鹿", position: "SF" },
                { name: "Andre Jackson Jr.", chinese: "小安德烈·杰克逊", team: "雄鹿", position: "SG" },

                // 费城76人
                { name: "Joel Embiid", chinese: "乔尔·恩比德", team: "76人", position: "C" },
                { name: "Tyrese Maxey", chinese: "泰瑞斯·马克西", team: "76人", position: "PG" },
                { name: "Tobias Harris", chinese: "托拜厄斯·哈里斯", team: "76人", position: "PF" },
                { name: "Kyle Lowry", chinese: "凯尔·洛瑞", team: "76人", position: "PG" },
                { name: "Kelly Oubre Jr.", chinese: "小凯利·乌布雷", team: "76人", position: "SF" },
                { name: "Buddy Hield", chinese: "巴迪·希尔德", team: "76人", position: "SG" },
                { name: "Paul Reed", chinese: "保罗·里德", team: "76人", position: "PF" },
                { name: "De'Anthony Melton", chinese: "德安东尼·梅尔顿", team: "76人", position: "SG" },
                { name: "Nicolas Batum", chinese: "尼古拉斯·巴图姆", team: "76人", position: "SF" },
                { name: "Robert Covington", chinese: "罗伯特·科温顿", team: "76人", position: "SF" },

                // 丹佛掘金
                { name: "Nikola Jokic", chinese: "尼古拉·约基奇", team: "掘金", position: "C" },
                { name: "Jamal Murray", chinese: "贾马尔·默里", team: "掘金", position: "PG" },
                { name: "Michael Porter Jr.", chinese: "小迈克尔·波特", team: "掘金", position: "SF" },
                { name: "Aaron Gordon", chinese: "阿隆·戈登", team: "掘金", position: "PF" },
                { name: "Kentavious Caldwell-Pope", chinese: "肯塔维奥斯·考德威尔-波普", team: "掘金", position: "SG" },
                { name: "Reggie Jackson", chinese: "雷吉·杰克逊", team: "掘金", position: "PG" },
                { name: "Christian Braun", chinese: "克里斯蒂安·布劳恩", team: "掘金", position: "SG" },
                { name: "Peyton Watson", chinese: "佩顿·沃特森", team: "掘金", position: "SF" },
                { name: "Zeke Nnaji", chinese: "泽克·纳吉", team: "掘金", position: "PF" },
                { name: "Julian Strawther", chinese: "朱利安·斯特劳瑟", team: "掘金", position: "SG" },

                // 达拉斯独行侠
                { name: "Luka Doncic", chinese: "卢卡·东契奇", team: "独行侠", position: "PG" },
                { name: "Kyrie Irving", chinese: "凯里·欧文", team: "独行侠", position: "PG" },
                { name: "P.J. Washington", chinese: "PJ·华盛顿", team: "独行侠", position: "PF" },
                { name: "Daniel Gafford", chinese: "丹尼尔·加福德", team: "独行侠", position: "C" },
                { name: "Derrick Jones Jr.", chinese: "小德里克·琼斯", team: "独行侠", position: "SF" },
                { name: "Tim Hardaway Jr.", chinese: "小蒂姆·哈达威", team: "独行侠", position: "SG" },
                { name: "Josh Green", chinese: "乔什·格林", team: "独行侠", position: "SG" },
                { name: "Dante Exum", chinese: "但丁·埃克萨姆", team: "独行侠", position: "PG" },
                { name: "Maxi Kleber", chinese: "马克西·克勒贝尔", team: "独行侠", position: "PF" },
                { name: "Jaden Hardy", chinese: "杰登·哈迪", team: "独行侠", position: "SG" },

                // 凤凰城太阳
                { name: "Devin Booker", chinese: "德文·布克", team: "太阳", position: "SG" },
                { name: "Kevin Durant", chinese: "凯文·杜兰特", team: "太阳", position: "SF" },
                { name: "Bradley Beal", chinese: "布拉德利·比尔", team: "太阳", position: "SG" },
                { name: "Jusuf Nurkic", chinese: "优素福·努尔基奇", team: "太阳", position: "C" },
                { name: "Grayson Allen", chinese: "格雷森·艾伦", team: "太阳", position: "SG" },
                { name: "Eric Gordon", chinese: "埃里克·戈登", team: "太阳", position: "SG" },
                { name: "Royce O'Neale", chinese: "罗伊斯·奥尼尔", team: "太阳", position: "SF" },
                { name: "Drew Eubanks", chinese: "德鲁·尤班克斯", team: "太阳", position: "C" },
                { name: "Josh Okogie", chinese: "乔什·奥科吉", team: "太阳", position: "SG" },
                { name: "Bol Bol", chinese: "波尔·波尔", team: "太阳", position: "C" },

                // 多伦多猛龙
                { name: "Scottie Barnes", chinese: "斯科蒂·巴恩斯", team: "猛龙", position: "SF" },
                { name: "RJ Barrett", chinese: "RJ·巴雷特", team: "猛龙", position: "SF" },
                { name: "Immanuel Quickley", chinese: "伊曼纽尔·奎克利", team: "猛龙", position: "PG" },
                { name: "Jakob Poeltl", chinese: "雅各布·珀尔特尔", team: "猛龙", position: "C" },
                { name: "Gary Trent Jr.", chinese: "小加里·特伦特", team: "猛龙", position: "SG" },
                { name: "Bruce Brown", chinese: "布鲁斯·布朗", team: "猛龙", position: "SG" },
                { name: "Gradey Dick", chinese: "格雷迪·迪克", team: "猛龙", position: "SG" },
                { name: "Chris Boucher", chinese: "克里斯·鲍彻", team: "猛龙", position: "PF" },
                { name: "Jordan Nwora", chinese: "乔丹·恩沃拉", team: "猛龙", position: "SF" },
                { name: "Jalen McDaniels", chinese: "贾伦·麦克丹尼尔斯", team: "猛龙", position: "SF" },

                // 新奥尔良鹈鹕
                { name: "Zion Williamson", chinese: "锡安·威廉姆森", team: "鹈鹕", position: "PF" },
                { name: "Brandon Ingram", chinese: "布兰登·英格拉姆", team: "鹈鹕", position: "SF" },
                { name: "CJ McCollum", chinese: "CJ·麦科勒姆", team: "鹈鹕", position: "SG" },
                { name: "Jonas Valanciunas", chinese: "约纳斯·瓦兰丘纳斯", team: "鹈鹕", position: "C" },
                { name: "Herb Jones", chinese: "赫伯·琼斯", team: "鹈鹕", position: "SF" },
                { name: "Trey Murphy III", chinese: "特雷·墨菲三世", team: "鹈鹕", position: "SF" },
                { name: "Larry Nance Jr.", chinese: "小拉里·南斯", team: "鹈鹕", position: "PF" },
                { name: "Jose Alvarado", chinese: "何塞·阿尔瓦拉多", team: "鹈鹕", position: "PG" },
                { name: "Naji Marshall", chinese: "纳吉·马绍尔", team: "鹈鹕", position: "SF" },
                { name: "Dyson Daniels", chinese: "戴森·丹尼尔斯", team: "鹈鹕", position: "SG" },

                // 孟菲斯灰熊
                { name: "Ja Morant", chinese: "贾·莫兰特", team: "灰熊", position: "PG" },
                { name: "Jaren Jackson Jr.", chinese: "小贾伦·杰克逊", team: "灰熊", position: "PF" },
                { name: "Desmond Bane", chinese: "德斯蒙德·贝恩", team: "灰熊", position: "SG" },
                { name: "Marcus Smart", chinese: "马库斯·斯马特", team: "灰熊", position: "PG" },
                { name: "Luke Kennard", chinese: "卢克·肯纳德", team: "灰熊", position: "SG" },
                { name: "Brandon Clarke", chinese: "布兰登·克拉克", team: "灰熊", position: "PF" },
                { name: "Xavier Tillman", chinese: "泽维尔·蒂尔曼", team: "灰熊", position: "PF" },
                { name: "David Roddy", chinese: "大卫·罗迪", team: "灰熊", position: "PF" },
                { name: "Ziaire Williams", chinese: "齐埃尔·威廉姆斯", team: "灰熊", position: "SF" },
                { name: "Vince Williams Jr.", chinese: "小文斯·威廉姆斯", team: "灰熊", position: "SF" },

                // 克利夫兰骑士
                { name: "Donovan Mitchell", chinese: "多诺万·米切尔", team: "骑士", position: "SG" },
                { name: "Darius Garland", chinese: "达柳斯·加兰德", team: "骑士", position: "PG" },
                { name: "Evan Mobley", chinese: "埃文·莫布利", team: "骑士", position: "PF" },
                { name: "Jarrett Allen", chinese: "贾莱特·艾伦", team: "骑士", position: "C" },
                { name: "Max Strus", chinese: "马克斯·斯特鲁斯", team: "骑士", position: "SG" },
                { name: "Caris LeVert", chinese: "卡里斯·勒韦尔", team: "骑士", position: "SG" },
                { name: "Georges Niang", chinese: "乔治斯·尼昂", team: "骑士", position: "PF" },
                { name: "Isaac Okoro", chinese: "艾萨克·奥科罗", team: "骑士", position: "SF" },
                { name: "Sam Merrill", chinese: "萨姆·梅里尔", team: "骑士", position: "SG" },
                { name: "Tristan Thompson", chinese: "特里斯坦·汤普森", team: "骑士", position: "C" },

                // 亚特兰大老鹰
                { name: "Trae Young", chinese: "特雷·杨", team: "老鹰", position: "PG" },
                { name: "Dejounte Murray", chinese: "德章泰·默里", team: "老鹰", position: "PG" },
                { name: "Jalen Johnson", chinese: "贾伦·约翰逊", team: "老鹰", position: "PF" },
                { name: "Bogdan Bogdanovic", chinese: "博格丹·博格达诺维奇", team: "老鹰", position: "SG" },
                { name: "Onyeka Okongwu", chinese: "奥涅卡·奥孔古", team: "老鹰", position: "C" },
                { name: "Clint Capela", chinese: "克林特·卡佩拉", team: "老鹰", position: "C" },
                { name: "Saddiq Bey", chinese: "萨迪克·贝", team: "老鹰", position: "SF" },
                { name: "Kobe Bufkin", chinese: "科比·巴夫金", team: "老鹰", position: "PG" },
                { name: "Garrison Mathews", chinese: "加里森·马修斯", team: "老鹰", position: "SG" },
                { name: "Wesley Matthews", chinese: "韦斯利·马修斯", team: "老鹰", position: "SG" },

                // 波特兰开拓者
                { name: "Anfernee Simons", chinese: "安芬尼·西蒙斯", team: "开拓者", position: "SG" },
                { name: "Scoot Henderson", chinese: "斯库特·亨德森", team: "开拓者", position: "PG" },
                { name: "Jerami Grant", chinese: "杰拉米·格兰特", team: "开拓者", position: "PF" },
                { name: "Deandre Ayton", chinese: "德安德烈·艾顿", team: "开拓者", position: "C" },
                { name: "Malcolm Brogdon", chinese: "马尔科姆·布罗格登", team: "开拓者", position: "PG" },
                { name: "Matisse Thybulle", chinese: "马蒂斯·塞布尔", team: "开拓者", position: "SG" },
                { name: "Shaedon Sharpe", chinese: "谢登·夏普", team: "开拓者", position: "SG" },
                { name: "Robert Williams III", chinese: "罗伯特·威廉姆斯三世", team: "开拓者", position: "C" },
                { name: "Toumani Camara", chinese: "图马尼·卡马拉", team: "开拓者", position: "PF" },
                { name: "Kris Murray", chinese: "克里斯·默里", team: "开拓者", position: "SF" },

                // 布鲁克林篮网
                { name: "Mikal Bridges", chinese: "米卡尔·布里奇斯", team: "篮网", position: "SF" },
                { name: "Cam Thomas", chinese: "卡姆·托马斯", team: "篮网", position: "SG" },
                { name: "Ben Simmons", chinese: "本·西蒙斯", team: "篮网", position: "PG" },
                { name: "Dorian Finney-Smith", chinese: "多里安·芬尼-史密斯", team: "篮网", position: "PF" },
                { name: "Cameron Johnson", chinese: "卡梅隆·约翰逊", team: "篮网", position: "PF" },
                { name: "Nic Claxton", chinese: "尼克·克拉克斯顿", team: "篮网", position: "C" },
                { name: "Dennis Schroder", chinese: "丹尼斯·施罗德", team: "篮网", position: "PG" },
                { name: "Lonnie Walker IV", chinese: "朗尼·沃克四世", team: "篮网", position: "SG" },
                { name: "Trendon Watford", chinese: "特伦登·沃特福德", team: "篮网", position: "PF" },
                { name: "Day'Ron Sharpe", chinese: "戴龙·夏普", team: "篮网", position: "C" },

                // 华盛顿奇才
                { name: "Kyle Kuzma", chinese: "凯尔·库兹马", team: "奇才", position: "PF" },
                { name: "Jordan Poole", chinese: "乔丹·普尔", team: "奇才", position: "SG" },
                { name: "Tyus Jones", chinese: "泰厄斯·琼斯", team: "奇才", position: "PG" },
                { name: "Deni Avdija", chinese: "德尼·阿夫迪亚", team: "奇才", position: "SF" },
                { name: "Bilal Coulibaly", chinese: "比拉尔·库利巴利", team: "奇才", position: "SF" },
                { name: "Corey Kispert", chinese: "科里·基斯珀特", team: "奇才", position: "SF" },
                { name: "Marvin Bagley III", chinese: "马文·巴格利三世", team: "奇才", position: "PF" },
                { name: "Richaun Holmes", chinese: "里乔恩·霍姆斯", team: "奇才", position: "C" },
                { name: "Landry Shamet", chinese: "兰德里·沙梅特", team: "奇才", position: "SG" },
                { name: "Patrick Baldwin Jr.", chinese: "小帕特里克·鲍德温", team: "奇才", position: "SF" },

                // 萨克拉门托国王
                { name: "De'Aaron Fox", chinese: "德阿龙·福克斯", team: "国王", position: "PG" },
                { name: "Domantas Sabonis", chinese: "多曼塔斯·萨博尼斯", team: "国王", position: "C" },
                { name: "Keegan Murray", chinese: "基根·默里", team: "国王", position: "PF" },
                { name: "Malik Monk", chinese: "马利克·蒙克", team: "国王", position: "SG" },
                { name: "Harrison Barnes", chinese: "哈里森·巴恩斯", team: "国王", position: "SF" },
                { name: "Kevin Huerter", chinese: "凯文·许尔特", team: "国王", position: "SG" },
                { name: "Trey Lyles", chinese: "特雷·莱尔斯", team: "国王", position: "PF" },
                { name: "Davion Mitchell", chinese: "达维恩·米切尔", team: "国王", position: "PG" },
                { name: "Chris Duarte", chinese: "克里斯·杜阿尔特", team: "国王", position: "SG" },
                { name: "Sasha Vezenkov", chinese: "萨沙·维琴科夫", team: "国王", position: "PF" },

                // 明尼苏达森林狼
                { name: "Anthony Edwards", chinese: "安东尼·爱德华兹", team: "森林狼", position: "SG" },
                { name: "Karl-Anthony Towns", chinese: "卡尔-安东尼·唐斯", team: "森林狼", position: "C" },
                { name: "Rudy Gobert", chinese: "鲁迪·戈贝尔", team: "森林狼", position: "C" },
                { name: "Mike Conley", chinese: "迈克·康利", team: "森林狼", position: "PG" },
                { name: "Jaden McDaniels", chinese: "杰登·麦克丹尼尔斯", team: "森林狼", position: "SF" },
                { name: "Naz Reid", chinese: "纳兹·里德", team: "森林狼", position: "C" },
                { name: "Kyle Anderson", chinese: "凯尔·安德森", team: "森林狼", position: "SF" },
                { name: "Nickeil Alexander-Walker", chinese: "尼基尔·亚历山大-沃克", team: "森林狼", position: "SG" },
                { name: "Monte Morris", chinese: "蒙特·莫里斯", team: "森林狼", position: "PG" },
                { name: "Jordan McLaughlin", chinese: "乔丹·麦克劳克林", team: "森林狼", position: "PG" },

                // 芝加哥公牛
                { name: "DeMar DeRozan", chinese: "德马尔·德罗赞", team: "公牛", position: "SF" },
                { name: "Zach LaVine", chinese: "扎克·拉文", team: "公牛", position: "SG" },
                { name: "Nikola Vucevic", chinese: "尼古拉·武切维奇", team: "公牛", position: "C" },
                { name: "Coby White", chinese: "科比·怀特", team: "公牛", position: "PG" },
                { name: "Alex Caruso", chinese: "亚历克斯·卡鲁索", team: "公牛", position: "SG" },
                { name: "Ayo Dosunmu", chinese: "阿约·多孙穆", team: "公牛", position: "PG" },
                { name: "Patrick Williams", chinese: "帕特里克·威廉姆斯", team: "公牛", position: "PF" },
                { name: "Torrey Craig", chinese: "托里·克雷格", team: "公牛", position: "SF" },
                { name: "Jevon Carter", chinese: "杰文·卡特", team: "公牛", position: "PG" },
                { name: "Julian Phillips", chinese: "朱利安·菲利普斯", team: "公牛", position: "SF" },

                // 夏洛特黄蜂
                { name: "LaMelo Ball", chinese: "拉梅洛·鲍尔", team: "黄蜂", position: "PG" },
                { name: "Brandon Miller", chinese: "布兰登·米勒", team: "黄蜂", position: "SF" },
                { name: "Miles Bridges", chinese: "迈尔斯·布里奇斯", team: "黄蜂", position: "PF" },
                { name: "Tre Mann", chinese: "特雷·曼", team: "黄蜂", position: "PG" },
                { name: "Grant Williams", chinese: "格兰特·威廉姆斯", team: "黄蜂", position: "PF" },
                { name: "Cody Martin", chinese: "科迪·马丁", team: "黄蜂", position: "SF" },
                { name: "Nick Richards", chinese: "尼克·理查兹", team: "黄蜂", position: "C" },
                { name: "Mark Williams", chinese: "马克·威廉姆斯", team: "黄蜂", position: "C" },
                { name: "Seth Curry", chinese: "塞斯·库里", team: "黄蜂", position: "SG" },
                { name: "Davis Bertans", chinese: "戴维斯·贝尔坦斯", team: "黄蜂", position: "PF" },

                // 纽约尼克斯
                { name: "Jalen Brunson", chinese: "杰伦·布伦森", team: "尼克斯", position: "PG" },
                { name: "Julius Randle", chinese: "朱利叶斯·兰德尔", team: "尼克斯", position: "PF" },
                { name: "OG Anunoby", chinese: "OG·阿努诺比", team: "尼克斯", position: "SF" },
                { name: "Donte DiVincenzo", chinese: "唐特·迪温琴佐", team: "尼克斯", position: "SG" },
                { name: "Josh Hart", chinese: "乔什·哈特", team: "尼克斯", position: "SF" },
                { name: "Mitchell Robinson", chinese: "米切尔·罗宾逊", team: "尼克斯", position: "C" },
                { name: "Isaiah Hartenstein", chinese: "以赛亚·哈尔滕施泰因", team: "尼克斯", position: "C" },
                { name: "Miles McBride", chinese: "迈尔斯·麦克布莱德", team: "尼克斯", position: "PG" },
                { name: "Bojan Bogdanovic", chinese: "博扬·博格达诺维奇", team: "尼克斯", position: "SF" },
                { name: "Alec Burks", chinese: "亚历克·伯克斯", team: "尼克斯", position: "SG" },

                // 俄克拉荷马城雷霆
                { name: "Shai Gilgeous-Alexander", chinese: "谢伊·吉尔杰斯-亚历山大", team: "雷霆", position: "PG" },
                { name: "Chet Holmgren", chinese: "切特·霍姆格伦", team: "雷霆", position: "C" },
                { name: "Jalen Williams", chinese: "杰伦·威廉姆斯", team: "雷霆", position: "SF" },
                { name: "Josh Giddey", chinese: "乔什·吉迪", team: "雷霆", position: "PG" },
                { name: "Luguentz Dort", chinese: "吕冈茨·多尔特", team: "雷霆", position: "SF" },
                { name: "Cason Wallace", chinese: "卡森·华莱士", team: "雷霆", position: "SG" },
                { name: "Isaiah Joe", chinese: "以赛亚·乔", team: "雷霆", position: "SG" },
                { name: "Jaylin Williams", chinese: "杰林·威廉姆斯", team: "雷霆", position: "PF" },
                { name: "Aaron Wiggins", chinese: "阿隆·威金斯", team: "雷霆", position: "SF" },
                { name: "Kenrich Williams", chinese: "肯里奇·威廉姆斯", team: "雷霆", position: "SF" },

                // 圣安东尼奥马刺
                { name: "Victor Wembanyama", chinese: "维克托·文班亚马", team: "马刺", position: "C" },
                { name: "Devin Vassell", chinese: "德文·瓦塞尔", team: "马刺", position: "SG" },
                { name: "Jeremy Sochan", chinese: "杰里米·索汉", team: "马刺", position: "PF" },
                { name: "Keldon Johnson", chinese: "凯尔登·约翰逊", team: "马刺", position: "SF" },
                { name: "Tre Jones", chinese: "特雷·琼斯", team: "马刺", position: "PG" },
                { name: "Malaki Branham", chinese: "马拉基·布兰汉姆", team: "马刺", position: "SG" },
                { name: "Zach Collins", chinese: "扎克·科林斯", team: "马刺", position: "C" },
                { name: "Cedi Osman", chinese: "切迪·奥斯曼", team: "马刺", position: "SF" },
                { name: "Julian Champagnie", chinese: "朱利安·尚帕涅", team: "马刺", position: "SF" },
                { name: "Blake Wesley", chinese: "布莱克·韦斯利", team: "马刺", position: "PG" },

                // 休斯顿火箭
                { name: "Jalen Green", chinese: "贾伦·格林", team: "火箭", position: "SG" },
                { name: "Alperen Sengun", chinese: "阿尔佩伦·森贡", team: "火箭", position: "C" },
                { name: "Fred VanVleet", chinese: "弗雷德·范弗利特", team: "火箭", position: "PG" },
                { name: "Dillon Brooks", chinese: "狄龙·布鲁克斯", team: "火箭", position: "SF" },
                { name: "Jabari Smith Jr.", chinese: "小贾巴里·史密斯", team: "火箭", position: "PF" },
                { name: "Amen Thompson", chinese: "阿门·汤普森", team: "火箭", position: "SG" },
                { name: "Cam Whitmore", chinese: "卡姆·惠特莫尔", team: "火箭", position: "SF" },
                { name: "Jeff Green", chinese: "杰夫·格林", team: "火箭", position: "PF" },
                { name: "Jock Landale", chinese: "乔克·兰代尔", team: "火箭", position: "C" },
                { name: "Aaron Holiday", chinese: "阿隆·霍勒迪", team: "火箭", position: "PG" },

                // 犹他爵士
                { name: "Lauri Markkanen", chinese: "劳里·马尔卡宁", team: "爵士", position: "PF" },
                { name: "Jordan Clarkson", chinese: "乔丹·克拉克森", team: "爵士", position: "SG" },
                { name: "Collin Sexton", chinese: "科林·塞克斯顿", team: "爵士", position: "PG" },
                { name: "John Collins", chinese: "约翰·科林斯", team: "爵士", position: "PF" },
                { name: "Walker Kessler", chinese: "沃克·凯斯勒", team: "爵士", position: "C" },
                { name: "Keyonte George", chinese: "基扬特·乔治", team: "爵士", position: "PG" },
                { name: "Talen Horton-Tucker", chinese: "塔伦·霍顿-塔克", team: "爵士", position: "SG" },
                { name: "Kris Dunn", chinese: "克里斯·邓恩", team: "爵士", position: "PG" },
                { name: "Ochai Agbaji", chinese: "奥柴·阿格巴吉", team: "爵士", position: "SG" },
                { name: "Taylor Hendricks", chinese: "泰勒·亨德里克斯", team: "爵士", position: "PF" },

                // 底特律活塞
                { name: "Cade Cunningham", chinese: "凯德·坎宁安", team: "活塞", position: "PG" },
                { name: "Jaden Ivey", chinese: "贾登·艾维", team: "活塞", position: "SG" },
                { name: "Jalen Duren", chinese: "贾伦·杜伦", team: "活塞", position: "C" },
                { name: "Ausar Thompson", chinese: "奥萨尔·汤普森", team: "活塞", position: "SF" },
                { name: "Bojan Bogdanovic", chinese: "博扬·博格达诺维奇", team: "活塞", position: "SF" },
                { name: "Isaiah Stewart", chinese: "以赛亚·斯图尔特", team: "活塞", position: "C" },
                { name: "Marcus Sasser", chinese: "马库斯·萨瑟", team: "活塞", position: "PG" },
                { name: "James Wiseman", chinese: "詹姆斯·怀斯曼", team: "活塞", position: "C" },
                { name: "Simone Fontecchio", chinese: "西蒙尼·丰泰基奥", team: "活塞", position: "SF" },
                { name: "Evan Fournier", chinese: "埃文·富尼耶", team: "活塞", position: "SG" },

                // 印第安纳步行者
                { name: "Tyrese Haliburton", chinese: "泰雷斯·哈利伯顿", team: "步行者", position: "PG" },
                { name: "Pascal Siakam", chinese: "帕斯卡尔·西亚卡姆", team: "步行者", position: "PF" },
                { name: "Myles Turner", chinese: "迈尔斯·特纳", team: "步行者", position: "C" },
                { name: "Bennedict Mathurin", chinese: "本尼迪克特·马图林", team: "步行者", position: "SG" },
                { name: "Andrew Nembhard", chinese: "安德鲁·内姆布哈德", team: "步行者", position: "PG" },
                { name: "Aaron Nesmith", chinese: "阿隆·内史密斯", team: "步行者", position: "SF" },
                { name: "Jarace Walker", chinese: "贾雷斯·沃克", team: "步行者", position: "PF" },
                { name: "T.J. McConnell", chinese: "TJ·麦康奈尔", team: "步行者", position: "PG" },
                { name: "Obi Toppin", chinese: "奥比·托平", team: "步行者", position: "PF" },
                { name: "Ben Sheppard", chinese: "本·谢泼德", team: "步行者", position: "SG" },

                // 奥兰多魔术
                { name: "Paolo Banchero", chinese: "保罗·班切罗", team: "魔术", position: "PF" },
                { name: "Franz Wagner", chinese: "弗朗茨·瓦格纳", team: "魔术", position: "SF" },
                { name: "Jalen Suggs", chinese: "贾伦·萨格斯", team: "魔术", position: "PG" },
                { name: "Wendell Carter Jr.", chinese: "小温德尔·卡特", team: "魔术", position: "C" },
                { name: "Markelle Fultz", chinese: "马克尔·富尔茨", team: "魔术", position: "PG" },
                { name: "Cole Anthony", chinese: "科尔·安东尼", team: "魔术", position: "PG" },
                { name: "Jonathan Isaac", chinese: "乔纳森·艾萨克", team: "魔术", position: "PF" },
                { name: "Moritz Wagner", chinese: "莫里茨·瓦格纳", team: "魔术", position: "C" },
                { name: "Joe Ingles", chinese: "乔·英格尔斯", team: "魔术", position: "SF" },
                { name: "Anthony Black", chinese: "安东尼·布莱克", team: "魔术", position: "PG" }
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
                { name: "Hakeem Olajuwon", chinese: "哈基姆·奥拉朱旺", team: "火箭", position: "C" },
                { name: "Kareem Abdul-Jabbar", chinese: "卡里姆·阿卜杜尔-贾巴尔", team: "湖人", position: "C" },
                { name: "Steve Nash", chinese: "史蒂夫·纳什", team: "太阳", position: "PG" },
                { name: "Scottie Pippen", chinese: "斯科蒂·皮蓬", team: "公牛", position: "SF" },
                { name: "Charles Barkley", chinese: "查尔斯·巴克利", team: "太阳", position: "PF" },
                { name: "Wilt Chamberlain", chinese: "威尔特·张伯伦", team: "湖人", position: "C" },
                { name: "Bill Russell", chinese: "比尔·拉塞尔", team: "凯尔特人", position: "C" },
                { name: "Julius Erving", chinese: "朱利叶斯·欧文", team: "76人", position: "SF" },
                { name: "Elvin Hayes", chinese: "埃尔文·海耶斯", team: "子弹", position: "PF" },
                { name: "Clyde Drexler", chinese: "克莱德·德雷克斯勒", team: "开拓者", position: "SG" },
                { name: "Oscar Robertson", chinese: "奥斯卡·罗伯特森", team: "雄鹿", position: "PG" },
                { name: "George Gervin", chinese: "乔治·格文", team: "马刺", position: "SG" },
                { name: "John Stockton", chinese: "约翰·斯托克顿", team: "爵士", position: "PG" },
                { name: "Karl Malone", chinese: "卡尔·马龙", team: "爵士", position: "PF" },
                { name: "Kevin Garnett", chinese: "凯文·加内特", team: "森林狼", position: "PF" },
                { name: "Ray Allen", chinese: "雷·阿伦", team: "凯尔特人", position: "SG" },
                { name: "Paul Pierce", chinese: "保罗·皮尔斯", team: "凯尔特人", position: "SF" },
                { name: "Dwyane Wade", chinese: "德维恩·韦德", team: "热火", position: "SG" },
                { name: "Chris Bosh", chinese: "克里斯·波什", team: "热火", position: "PF" },
                { name: "Manu Ginobili", chinese: "马努·吉诺比利", team: "马刺", position: "SG" },
                { name: "Tony Parker", chinese: "托尼·帕克", team: "马刺", position: "PG" },
                { name: "Vince Carter", chinese: "文斯·卡特", team: "猛龙", position: "SF" },
                { name: "Pau Gasol", chinese: "保罗·加索尔", team: "湖人", position: "PF" },
                { name: "Marc Gasol", chinese: "马克·加索尔", team: "灰熊", position: "C" },
                { name: "Tracy McGrady", chinese: "特雷西·麦克格雷迪", team: "魔术", position: "SG" },
                { name: "Grant Hill", chinese: "格兰特·希尔", team: "活塞", position: "SF" },
                { name: "Jason Kidd", chinese: "贾森·基德", team: "篮网", position: "PG" },
                { name: "Reggie Miller", chinese: "雷吉·米勒", team: "步行者", position: "SG" },
                { name: "Patrick Ewing", chinese: "帕特里克·尤因", team: "尼克斯", position: "C" },
                { name: "David Robinson", chinese: "大卫·罗宾逊", team: "马刺", position: "C" },
                { name: "Gary Payton", chinese: "加里·佩顿", team: "超音速", position: "PG" },
                { name: "Alonzo Mourning", chinese: "阿朗佐·莫宁", team: "热火", position: "C" },
                { name: "Mitch Richmond", chinese: "米奇·里奇蒙德", team: "国王", position: "SG" },
                { name: "Chris Webber", chinese: "克里斯·韦伯", team: "国王", position: "PF" },
                { name: "Penny Hardaway", chinese: "安芬尼·哈达威", team: "魔术", position: "PG" }
            ]
};

// 球队列表
const teams = ["湖人", "勇士", "凯尔特人", "热火", "雄鹿", "76人", "掘金", "太阳", 
            "快船", "篮网", "猛龙", "鹈鹕", "灰熊", "骑士", "老鹰", "开拓者", 
            "奇才", "国王", "森林狼", "公牛", "黄蜂", "尼克斯", "雷霆", "马刺", 
            "火箭", "爵士", "活塞", "步行者", "魔术"];

// 工具函数
function getRandomPlayers(playerType, count) {
    const playerPool = nbaData[playerType] || nbaData.active;
    const shuffled = [...playerPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function getRandomTeam() {
    return teams[Math.floor(Math.random() * teams.length)];
}

// 生成对决 - 只显示球员信息，不生成随机球队
// 生成对决 - 修复版本
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
    
    // 模拟加载效果 - 使用更短的延迟并添加调试信息
    setTimeout(() => {
        try {
            console.log("开始生成球员对决...");
            const players = getRandomPlayers(playerType, 4);
            console.log("获取到的球员:", players);
            
            // 确保DOM元素存在
            const team1PlayersDiv = document.getElementById('team1Players');
            const team2PlayersDiv = document.getElementById('team2Players');
            
            if (!team1PlayersDiv || !team2PlayersDiv) {
                throw new Error('找不到DOM元素');
            }
            
            // 更新队伍1的球员
            team1PlayersDiv.innerHTML = players.slice(0, 2).map(player => `
                <div class="player-card">
                    <div class="player-name">${player.name}</div>
                    <div class="player-details">${player.chinese} • ${player.team} • ${player.position}</div>
                </div>
            `).join('');
            
            // 更新队伍2的球员
            team2PlayersDiv.innerHTML = players.slice(2, 4).map(player => `
                <div class="player-card">
                    <div class="player-name">${player.name}</div>
                    <div class="player-details">${player.chinese} • ${player.team} • ${player.position}</div>
                </div>
            `).join('');
            
            console.log("球员信息已更新");
            
            // 显示结果
            loading.style.display = 'none';
            matchupResult.style.display = 'block';
            console.log("显示结果");
        } catch (error) {
            console.error('生成球员对决时出错:', error);
            loading.style.display = 'none';
            matchupResult.style.display = 'block';
            document.getElementById('team1Players').innerHTML = '<div class="player-card">生成失败，请刷新页面重试</div>';
            document.getElementById('team2Players').innerHTML = '<div class="player-card">生成失败，请刷新页面重试</div>';
        }
    }, 500); // 减少延迟时间
}

// 生成球队
function generateTeams() {
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
        const teamAName = getRandomTeam();
        const teamBName = getRandomTeam();
        
        // 更新队伍A
        document.getElementById('teamA').textContent = teamAName;
        
        // 更新队伍B
        document.getElementById('teamB').textContent = teamBName;
        
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
