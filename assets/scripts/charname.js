const okabe    = "#663030;"; // 岡部
const mayuri   = "#5566EE;"; // まゆり
const daru     = "#BBCC22;"; // ダル
const tina     = "#EE5555;"; // 紅莉栖
const moeka    = "#EAC220;"; // 桐生萌郁
const ruka     = "#33AA55"; // ルカ子
const faris    = ""; // ﾌｪｲﾘｽ
const suzu     = ""; // 鈴羽
const maho     = ""; // 真帆
const kagari   = ""; // かがり
const yuki     = ""; // 由季
const brown    = ""; // 天王寺
const nae      = ""; // 綯
const leskinen = ""; // レスキネン
// 朱美, フブキ, カエデ, ｼﾝｲﾁ, 中鉢, 栄輔, 幸高, ちかね, 黒木, 4℃, 伽夜乃, 今宮綴, レイエス, 井崎

const charnames = [
	{ "name": "岡部倫太郎",                         "color": okabe  }, // 岡部
	{ "name": "岡部",                               "color": okabe  },
	{ "name": "倫太郎",                             "color": okabe  },
	{ "name": "鳳凰院凶真",                         "color": okabe  },
	{ "name": "鳳凰院",                             "color": okabe  },
	{ "name": "凶真",                               "color": okabe  },
	{ "name": "鳳凰院クロト",                       "color": okabe  },
	{ "name": "クロト",                             "color": okabe  },
	{ "name": "未来岡部",                           "color": okabe  },
	{ "name": "現在岡部",                           "color": okabe  },
	{ "name": "過去岡部",                           "color": okabe  },
	{ "name": "岡部Ω",                             "color": okabe  },
	{ "name": "岡部α",                             "color": okabe  },
	{ "name": "岡部SG",                             "color": okabe  },
	{ "name": "岡部β",                             "color": okabe  },
	{ "name": "岡部γ",                             "color": okabe  },
	{ "name": "岡部δ",                             "color": okabe  },
	{ "name": "岡部ε",                             "color": okabe  },
	{ "name": "岡部絶倫太郎",                       "color": okabe  },
	{ "name": "絶倫太郎",                           "color": okabe  },
	{ "name": "オカリン",                           "color": okabe  },
	{ "name": "オカリンおじさん",                   "color": okabe  },
	{ "name": "執念オカリン",                       "color": okabe  },
	{ "name": "絶倫オカリン",                       "color": okabe  },
	{ "name": "ゼツリン",                           "color": okabe  },
	{ "name": "オカリン・ニャンニャン",             "color": okabe  },
	{ "name": "キョーマ",                           "color": okabe  },
	{ "name": "M3",                                 "color": okabe  },
	{ "name": "椎名まゆり",                         "color": mayuri }, // まゆり
	{ "name": "椎名",                               "color": mayuri },
	{ "name": "まゆり",                             "color": mayuri },
	{ "name": "まゆしぃ",                           "color": mayuri },
	{ "name": "マユシィ",                           "color": mayuri },
	{ "name": "マユシィ・ニャンニャン",             "color": mayuri },
	{ "name": "まちょり",                           "color": mayuri },
	{ "name": "まちょしぃ",                         "color": mayuri },
	{ "name": "まっちょしぃ",                       "color": mayuri },
	{ "name": "マッチョシィ",                       "color": mayuri },
	{ "name": "マッチョシィ・ニャンニャン",         "color": mayuri },
	{ "name": "まゆ氏",                             "color": mayuri },
	{ "name": "まゆりお姉ちゃん",                   "color": mayuri },
	{ "name": "まゆりお姉さん",                     "color": mayuri },
	{ "name": "まゆ姉さん",                         "color": mayuri },
	{ "name": "橋田至",                             "color": daru   }, // ダル
	{ "name": "橋田",                               "color": daru   },
	{ "name": "至",                                 "color": daru   },
	{ "name": "ダル",                               "color": daru   },
	{ "name": "ダルおじさん",                       "color": daru   },
	{ "name": "ダルニャン",                         "color": daru   },
	{ "name": "ダルシィ・ニャン",                   "color": daru   },
	{ "name": "DaSH",                               "color": daru   },
	{ "name": "ダル・ザ・スーパーハッカー",         "color": daru   },
	{ "name": "バレル・タイター",                   "color": daru   },
	{ "name": "バレル",                             "color": daru   },
	{ "name": "スーパーハッカー",                   "color": daru   },
	{ "name": "スーパーハカー",                     "color": daru   },
	{ "name": "頼れる右腕",                         "color": daru   },
	{ "name": "マイ・フェイバリット・ライトアーム", "color": daru   },
	{ "name": "牧瀬紅莉栖",                         "color": tina   }, // 紅莉栖
	{ "name": "牧瀬",                               "color": tina   },
	{ "name": "紅莉栖",                             "color": tina   },
	{ "name": "助手",                               "color": tina   },
	{ "name": "腐助手",                             "color": tina   },
	{ "name": "クリスティーナ",                     "color": tina   },
	{ "name": "クリ腐ティーナ",                     "color": tina   },
	{ "name": "ティーナ",                           "color": tina   },
	{ "name": "セレセブ",                           "color": tina   },
	{ "name": "セレブ・セブンティーン",             "color": tina   },
	{ "name": "くまぱん",                           "color": tina   },
	{ "name": "蘇りし者",                           "color": tina   },
	{ "name": "腐りし者",                           "color": tina   },
	{ "name": "ザ・ゾンビ",                         "color": tina   },
	{ "name": "実験大好きっ子",                     "color": tina   },
	{ "name": "実験大好きっ娘",                     "color": tina   },
	{ "name": "スイーツ（笑）",                     "color": tina   },
	{ "name": "スイーツ(笑)",                       "color": tina   },
	{ "name": "スイーツ（）",                       "color": tina   },
	{ "name": "スイーツ()",                         "color": tina   },
	{ "name": "＠ちゃんねらークリス",               "color": tina   },
	{ "name": "@ちゃんねらークリス",                "color": tina   },
	{ "name": "栗悟飯とカメハメ波",                 "color": tina   },
	{ "name": "ツンツン小生意気ヘルパー",           "color": tina   },
	{ "name": "ヴァージン・エクストラ諸島",         "color": tina   },
	{ "name": "天才変態少女",                       "color": tina   },
	{ "name": "天才変態処女",                       "color": tina   },
	{ "name": "天才HENTAI少女",                     "color": tina   },
	{ "name": "天才HENTAI処女",                     "color": tina   },
	{ "name": "実験大好き天才変態少女",             "color": tina   },
	{ "name": "実験大好き天才変態処女",             "color": tina   },
	{ "name": "実験大好き天才HENTAI少女",           "color": tina   },
	{ "name": "実験大好き天才HENTAI処女",           "color": tina   },
	{ "name": "冷血放蕩天才変態少女",               "color": tina   },
	{ "name": "冷血放蕩天才変態処女",               "color": tina   },
	{ "name": "冷血放蕩天才HENTAI少女",             "color": tina   },
	{ "name": "冷血放蕩天才HENTAI処女",             "color": tina   },
	{ "name": "実験大好き冷血放蕩天才変態少女",     "color": tina   },
	{ "name": "実験大好き冷血放蕩天才変態処女",     "color": tina   },
	{ "name": "実験大好き冷血放蕩天才HENTAI少女",   "color": tina   },
	{ "name": "実験大好き冷血放蕩天才HENTAI処女",   "color": tina   },
	{ "name": "メリケン処女",                       "color": tina   },
	{ "name": "臀部に蒙古斑女",                     "color": tina   },
	{ "name": "Amadeus紅莉栖",                      "color": tina   },
	{ "name": "Ama紅莉栖",                          "color": tina   },
	{ "name": "甘栗",                               "color": tina   },
	{ "name": "クーニャン",                         "color": tina   },
	{ "name": "クリスティーニャン",                 "color": tina   },
	{ "name": "クリス・ニャンニャン",               "color": tina   },
	{ "name": "セレセブ・ニャンニャン",             "color": tina   },
	{ "name": "助手のお姉ちゃん",                   "color": tina   },
	{ "name": "クリスお姉ちゃん",                   "color": tina   },
	{ "name": "助手のお姉さん",                     "color": tina   },
	{ "name": "クリスお姉さん",                     "color": tina   },
	{ "name": "紅莉栖おばさん",                     "color": tina   },
	{ "name": "牧瀬氏",                             "color": tina   },
	{ "name": "クリスたん",                         "color": tina   },
	{ "name": "桐生萌郁",                           "color": moeka  }, // 桐生萌郁
	{ "name": "桐生",                               "color": moeka  },
	{ "name": "萌郁",                               "color": moeka  },
	{ "name": "閃光の指圧師",                       "color": moeka  },
	{ "name": "シャイニング・フィンガー",           "color": moeka  },
	{ "name": "指圧師",                             "color": moeka  },
	{ "name": "M4",                                 "color": moeka  },
	{ "name": "閃光・ニャンニャン",                 "color": moeka  },
	{ "name": "シャイニング・ニャンニャン",         "color": moeka  },
	{ "name": "モエモエ・ニャンニャン",             "color": moeka  },
	{ "name": "モエモエ",                           "color": moeka  },
	{ "name": "もえいく",                           "color": moeka  },
	{ "name": "もえいくさん",                       "color": moeka  },
	{ "name": "萌郁お姉ちゃん",                     "color": moeka  },
	{ "name": "萌郁お姉さん",                       "color": moeka  },
	{ "name": "桐生氏",                             "color": moeka  },
	{ "name": "漆原るか",                           "color": ruka   }, // ルカ子
	{ "name": "漆原",                               "color": ruka   },
	{ "name": "るか",                               "color": ruka   },
	{ "name": "るか子",                             "color": ruka   },
	{ "name": "ルカ",                               "color": ruka   },
	{ "name": "ルカ子",                             "color": ruka   },
	{ "name": "るか兄さん",                         "color": ruka   },
	{ "name": "ルカ兄さん",                         "color": ruka   },
	{ "name": "るか姉さん",                         "color": ruka   },
	{ "name": "ルカ姉さん",                         "color": ruka   },
	{ "name": "るかお姉さん",                       "color": ruka   },
	{ "name": "ルカお姉さん",                       "color": ruka   },
	{ "name": "るかお姉ちゃん",                     "color": ruka   },
	{ "name": "ルカお姉ちゃん",                     "color": ruka   },
	{ "name": "ルカニャン",                         "color": ruka   },
	{ "name": "ルカニャン・ニャンニャン",           "color": ruka   },
	{ "name": "いたる",                             "color": ruka   },
];

window.onload = function() {
	var tags = document.getElementsByTagName("strong");
	for (var i = 0; i < tags.length; ++i) {
		for (var j = 0; j < charnames.length; ++i) {
			if (tags[i].innerText == "^" + charnames[j].name) {
				tags[i].innerText = charnames[j].name;
				tags[i].style.cssText = "font-weight: bold; color: " + charnames[j].color;
				break;
			}
		}
	}
}
