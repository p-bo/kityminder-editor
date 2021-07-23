define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Myšlenková mapa',
            'tianpan': 'Mapa oblohy',
            'structure': 'Organizační diagram',
            'filetree': 'Uspořádání adresáře',
            'right': 'Diagram logické struktury',
            'fish-bone': 'Diagram příčin a následků'
        },
        'theme': {
            'classic': 'Klasický',
            'classic-compact': 'Kompaktní klasický',
            'snow': 'Jemné studené světlo',
            'snow-compact': 'Kompaktní studené světlo',
            'fish': 'Diagram příčin a následků',
            'wire': 'Prototyp',
            'fresh-red': 'Čerstvý červený',
            'fresh-soil': 'Špinavý žlutý',
            'fresh-green': 'Umělecký zelený',
            'fresh-blue': 'Nebesky modrý',
            'fresh-purple': 'Romanticky purpurový',
            'fresh-pink': 'Lehký pudrový',
            'fresh-red-compat': 'Komapktní červený',
            'fresh-soil-compat': 'Kompaktní žlutý',
            'fresh-green-compat': 'Kompaktní zelený',
            'fresh-blue-compat': 'Kompaktní modrý',
            'fresh-purple-compat': 'Kompaktní purporový',
            'fresh-pink-compat': 'Kompaktní pudrový',
            'tianpan': 'Klasický denní',
            'tianpan-compact': 'Kompaktní denní'
        },
        'maintopic': 'Hlavní motiv',
        'topic': 'Téma odbočky',
        'panels': {
            'history': 'historie',
            'template': 'šablona',
            'theme': 'vzhled',
            'layout': 'rozvržení',
            'style': 'styl',
            'font': 'text',
            'color': 'barva',
            'background': 'pozadí',
            'insert': 'vložit',
            'arrange': 'uzpůsobit',
            'nodeop': 'stávající',
            'priority': 'priorita',
            'progress': 'postup',
            'resource': 'prostředek',
            'note': 'poznámka',
            'attachment': 'příloha',
            'word': 'text'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Vložit uzel na stejné úrovni',
                'appendparentnode': 'Vložit nadřazený uzel',
                'appendchildnode': 'Vložit podřízený uzel',
                'removenode': 'Smazat',
                'editnode': 'Upravit',
                'arrangeup': 'Nahoru',
                'arrangedown': 'Dolů',
                'resetlayout': 'Vrátit rozvržení do výchozího stavu',
                'expandtoleaf': 'Rozbalit všechny uzly',
                'expandtolevel1': 'Rozbalit do úrovně 1',
                'expandtolevel2': 'Rozbalit do úrovně 2',
                'expandtolevel3': 'Rozbalit do úrovně 3',
                'expandtolevel4': 'Rozbalit do úrovně 4',
                'expandtolevel5': 'Rozbalit do úrovně 5',
                'expandtolevel6': 'Rozbalit do úrovně 6',
                'fullscreen': 'celá obrazovka',
                'outline': 'obrys'
            },
            'search': 'Hledat',
            'expandtoleaf': 'Rozbalit',
            'back': 'zpět',
            'undo': 'Vrátit zpět (Ctrl + Z)',
            'redo': 'Zopakovat (Ctrl + Y)',
            'tabs': {
                'idea': 'Nápad',
                'appearence': 'Vzhled',
                'view': 'Zobrazit'
            },
            'bold': 'Tučné',
            'italic': 'Skloněné',
            'forecolor': 'Barva písma',
            'fontfamily': 'Písmo',
            'fontsize': 'Velikost',
            'layoutstyle': 'Motiv vzhledu',
            'node': 'Operace s uzlem',
            'hand': 'Umožnit přemisťování přetahováním',
            'camera': 'Najít kořenový uzel',
            'zoom-in': 'Přiblížit (Ctrl+)',
            'zoom-out': 'Oddálit (Ctrl-)',
            'markers': 'štítek',
            'help': 'Nápověda',
            'preference': 'Předvolby',
            'expandnode': 'Rozbalit až po „listy“',
            'collapsenode': 'Sbalit uzel',
            'template': 'šablona',
            'theme': 'motiv vzhledu',
            'clearstyle': 'Vymazat styl',
            'copystyle': 'Zkopírovat styl',
            'pastestyle': 'Vložit styl',
            'appendsiblingnode': 'stejný vzhled',
            'appendchildnode': 'podřízený vzhled',
            'arrangeup': 'přenést výš',
            'arrangedown': 'přenést níž',
            'editnode': 'Upravit',
            'removenode': 'odebrat',
            'priority': 'Priorita',
            'progress': {
                'p1': 'nespušteno',
                'p2': 'Dokončeno z 1/8',
                'p3': 'Dokončeno z 1/4',
                'p4': 'Dokončeno z 3/8',
                'p5': 'Dokončeno z poloviny',
                'p6': 'Dokončeno z 5/8',
                'p7': 'Dokončeno z 3/4',
                'p8': 'Dokončeno z 7/8',
                'p9': 'Dokončeno',
                'p0': 'Vyčistit ukazatel postupu'
            },
            'resource': {
                'add': 'Přidat'
            },
            'link': 'Odkaz',
            'image': 'Obrázek',
            'note': 'Poznámka',
            'insertlink': 'Vložit odkaz',
            'insertimage': 'Vložit obrázek',
            'insertnote': 'Vložit poznámku',
            'removelink': 'Odebrat stávající odkazy',
            'removeimage': 'Odebrat stávající obrázky',
            'removenote': 'Odebrat stávající poznámky',
            'resetlayout': 'Uspořádat',
            'navigator': 'Navigátor',
            'selectall': 'Vybrat vše',
            'selectrevert': 'Převrátit výběr',
            'selectsiblings': 'Vybrat na stejné úrovni',
            'selectlevel': 'Vybrat úroveň',
            'selectpath': 'Vybrat cestu',
            'selecttree': 'Vybrat podstrom',
            'noteeditor': {
                'title': 'Poznámka',
                'hint': 'Podporuje GFM gramatiku',
                'placeholder': 'Vyberte uzel u kterého upravit poznámku'
            },
            'dialog': {
                'image': {
                    'title': 'Obrázek',
                    'imagesearch': 'Hledání obrázku',
                    'keyword': 'Klíčové slovo：',
                    'placeholder': 'Zadejte klíčové slovo, které hledat',
                    'baidu': 'Hledat',
                    'linkimage': 'Propojený obrázek',
                    'linkurl': 'URL：',
                    'placeholder2': 'Vyžaduje：začíná na http(s)://',
                    'imagehint': 'Rada：',
                    'placeholder3': 'Volitelné：Text, který se objeví při najetí ukazatelem na obrázek',
                    'preview': 'Náhled obrázku：',
                    'uploadimage': 'Nahrát obrázek',
                    'selectfile': 'Vybrat soubor…',
                    'ok': 'OK',
                    'cancel': 'Storno',
                    'formatinfo': 'je třeba, aby přípona souboru byla jpg, gif nebo png'
                },
                'hyperlink': {
                    'title': 'Odkaz',
                    'linkurl': 'URL adresa odkazu url：',
                    'linkhint': 'Rada：',
                    'placeholder': 'Vyžaduje：začíná na http(s):// nebo ftp://',
                    'placeholder2': 'Volitelné: Text, který se objeví při najetí ukazatelem na odkaz',
                    'ok': 'OK',
                    'cancel': 'Storno'

                },
                'exportnode': {
                    'title': 'Exportovat uzel',
                    'ok': 'OK',
                    'cancel': 'Storno'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Hlavní téma'
            },
            'node': {
                'arrangeup': 'Přesunout nahoru',
                'appendchildnode': 'Připojit podřízený uzel',
                'appendsiblingnode': 'Připojit uzel na stejné úrovni',
                'arrangedown': 'Přesunout dolů',
                'removenode': 'Smazat',
                'appendparentnode': 'Připojjit nadřazený uzel',
                'selectall': 'Vybrat vše',
                'topic': 'Téma',
                'importnode': 'Importovat uzel',
                'exportnode': 'Exportovat uzel'
            },
            'input': {
                'edit': 'Upravit'
            },
            'priority': {
                'main': 'Priorita',
                'remove': 'Smazat',
                'esc': 'Esc'
            },
            'progress': {
                'main': 'Postup',
                'remove': 'Smazat',
                'esc': 'Esc'
            },
            'history': {
                'undo': 'Zpět',
                'redo': 'Znovu'
            }
        }
    };
});
