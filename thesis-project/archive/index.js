let database =
{
    "tagList": [
        {
            "tag": "Archaeology",
            "files": [
                65
            ]
        },
        {
            "tag": "Architecture",
            "files": [
                23,
                29,
                41,
                96
            ],
            "children": [
                {
                    "tag": "Architecture & Environment",
                    "files": [
                        82
                    ],
                    "children": null
                },
                {
                    "tag": "Criticism",
                    "files": [
                        21
                    ],
                    "children": null
                },
                {
                    "tag": "Modern",
                    "files": [
                        22
                    ],
                    "children": null
                },
                {
                    "tag": "Theory",
                    "files": [
                        0,
                        107
                    ],
                    "children": null
                }
            ]
        },
        {
            "tag": "Technology",
            "files": [
                27,
                42,
                54,
                63,
                71,
                74,
                75,
                76,
                78,
                83,
                86,
                94,
                106
            ],
            "children": [
                {
                    "tag": "Digital Culture",
                    "files": [
                        26,
                        99,
                        103,
                        85
                    ],
                    "children": null
                },
                {
                    "tag": "Virtual Reality",
                    "files": [
                        5,
                        37,
                        90,
                        93,
                        101,
                        108,
                        109
                    ],
                    "children": null
                }
            ]
        },
        {
            "tag": "Theory",
            "files": [
                61,
                92
            ],
            "children": null
        }
    ],
    "fileList": [
        {
            "id": 0,
            "title": "Is there an Object-Oriented Architecture?",
            "by": [
                {
                    "name": "Graham Harman",
                    "type": "Author"
                }
            ],
            "year": null,
            "src": "pdf/(Architecture Exchange_ Engagements with Contemporary Theory and Philosophy) Joseph Bedford - Is There an Object-Oriented Architecture_ _ Engaging Graham Harman-Bloomsbury Academic (2020).pdf"
        },
        {
            "id": 1,
            "title": "Making Design Theory",
            "by": [
                {
                    "name": "Johan Redström",
                    "type": "Author"
                }
            ],
            "year": null,
            "src": "pdf/(Design Thinking, Design Theory) Johan Redström - Making Design Theory-MIT Press (2017).pdf"
        },
        {
            "id": 2,
            "title": "Stop Stealing Sheep & find out how type works",
            "by": [
                {
                    "name": "Erik Spiekerman",
                    "type": "Author"
                }
            ],
            "year": null,
            "src": "pdf/(Graphic Design & Visual Communication Courses) Erik Spiekermann - Stop Stealing Sheep & Find Out How Type Works-Adobe Press (2013).pdf"
        },
        {
            "id": 3,
            "title": "Introducing Asian Feminist Theology",
            "by": [
                {
                    "name": "Kwok Pui-lan",
                    "type": "Author"
                }
            ],
            "year": null,
            "src": "pdf/(Introductions in feminist theology 4.) Kwok, Pui-lan - Introducing Asian feminist theology-Sheffield Academic Press (2000).pdf"
        },
        {
            "id": 114,
            "title": "Designing Books: practice and theory",
            "by": [
                {
                    "name": "Jost Hochuli",
                    "type": "Author"
                }
            ],
            "year": null,
            "src": "pdf/hochuli - designing books.pdf"
        },
        {
            "id": 115,
            "title": "Signs, Symbols & Ornaments",
            "by": [
                {
                    "name": "Rene Smeets",
                    "type": "Author"
                }
            ],
            "year": null,
            "src": "pdf/signs, symbols & ornaments - rene smeets.pdf"
        }
    ]
}

console.log(database)

function getTagList() {

    for (let i = 0; i < database.tagList.length; i++) {
        let taglevel1 = i;
        document.getElementById("taglist").innerHTML += `<div class="taglist a" id="taglevel${taglevel1}"><em><a href="#level${taglevel1}">${database.tagList[i].tag}</a></em></div>`
        console.log(database.tagList[i].tag)
        console.log("taglevel1 " + taglevel1)

        for (let i = 0; (database.tagList[taglevel1].children != null) && (i < database.tagList[taglevel1].children.length); i++) {
            let taglevel2 = i;
            document.getElementById(`taglevel${taglevel1}`).innerHTML += `<div class="taglist b" id="taglevel${taglevel1}-${taglevel2}"><em><a href="#level${taglevel1}-${taglevel2}">${database.tagList[taglevel1].children[i].tag}</a></em></div>`
            console.log("|   " + database.tagList[taglevel1].children[i].tag)
            console.log("|   taglevel2 " + taglevel2)

            for (let i = 0; (database.tagList[taglevel1].children[taglevel2].children != null) && (i < database.tagList[taglevel1].children[taglevel2].children.length); i++) {
                let taglevel3 = i;
                document.getElementById(`taglevel${taglevel1}-${taglevel2}`).innerHTML += `<div class="taglist c" id="taglevel${taglevel1}-${taglevel2}-${taglevel3}"><em><a href="#level${taglevel1}-${taglevel2}-${taglevel3}">${database.tagList[taglevel1].children[taglevel2].children[i].tag}</a></em></div>`
                console.log("|   |   " + database.tagList[taglevel1].children[taglevel2].children[i].tag)
                console.log("|   |   taglevel3 " + taglevel3)
            }
        }
    }
}

getTagList();


function getMasterList() {

    for (let i = 0; i < database.tagList.length; i++) {
        let level1 = i;
        document.getElementById("masterlist").innerHTML += `<div class="list a" id="level${level1}"><em>${database.tagList[i].tag}</em></div>`
        console.log(database.tagList[i].tag)
        console.log("level1 " + level1)

        for (let i = 0; i < database.tagList[level1].files.length; i++) {
            let file = i;
            document.getElementById(`level${level1}`).innerHTML += `<div class="link"><i><a href="#" onclick="reader('${database.fileList[database.tagList[level1].files[file]].src}')">${database.fileList[database.tagList[level1].files[file]].title}</a></i> by ${database.fileList[database.tagList[level1].files[file]].by[0].name}</div>`
            console.log(database.tagList[level1].files[file])
        }

        for (let i = 0; (database.tagList[level1].children != null) && (i < database.tagList[level1].children.length); i++) {
            let level2 = i;
            document.getElementById(`level${level1}`).innerHTML += `<div class="list b" id="level${level1}-${level2}"><em>${database.tagList[level1].children[i].tag}</em></div>`
            console.log("|   " + database.tagList[level1].children[i].tag)
            console.log("|   level2 " + level2)

            for (let i = 0; i < database.tagList[level1].children[level2].files.length; i++) {
                let file = i;
                document.getElementById(`level${level1}-${level2}`).innerHTML += `<div class="link"><i><a href="#" onclick="reader('${database.fileList[database.tagList[level1].children[level2].files[file]].src}')">${database.fileList[database.tagList[level1].children[level2].files[file]].title}</a></i> by ${database.fileList[database.tagList[level1].children[level2].files[file]].by[0].name}</div>`
                console.log(database.tagList[level1].children[level2].files[file])
            }

            for (let i = 0; (database.tagList[level1].children[level2].children != null) && (i < database.tagList[level1].children[level2].children.length); i++) {
                let level3 = i;
                document.getElementById(`level${level1}-${level2}`).innerHTML += `<div class="list c" id="level${level1}-${level2}-${level3}"><em>${database.tagList[level1].children[level2].children[i].tag}</em></div>`
                console.log("|   |   " + database.tagList[level1].children[level2].children[i].tag)
                console.log("|   |   level3 " + level3)

                for (let i = 0; i < database.tagList[level1].children[level2].children[level3].files.length; i++) {
                    let file = i;
                    document.getElementById(`level${level1}-${level2}-${level3}`).innerHTML += `<div class="link"><i><a href="#" onclick="reader('${database.fileList[database.tagList[level1].children[level2].children[level3].files[file]].src}')">${database.fileList[database.tagList[level1].children[level2].children[level3].files[file]].title}</a></i> by ${database.fileList[database.tagList[level1].children[level2].children[level3].files[file]].by[0].name}</div>`
                    console.log(database.tagList[level1].children[level2].children[level3].files[file])
                }
            }
        }
    }
}

getMasterList();



function reader(source) {
    document.getElementById("viewer").innerHTML = `<iframe id="iframepdf" src="${source}"></iframe><div class="close" onclick="remove()">×</div>`
    iframe.src = source;
}

function remove() {
    document.getElementById("viewer").innerHTML = "";
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		document.getElementById("viewer").innerHTML = "";
	}
});