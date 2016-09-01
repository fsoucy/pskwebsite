import { Component } from '@angular/core';
import { Brother, BrotherComponent} from './app.brother_component'
import { NavBarComponent} from './app.navbar_component'
import {System.IO};



var readStringFromFileAtPath = function(pathOfFileToReadFrom)
{
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

var bros_json = readStringFromFileAtPath("brothers.json");

var BROTHERS = JSON.parse(bros_json);


var SENIORS = [];
var JUNIORS = [];
var SOPHOMORES = [];
for (var i =  0; i < BROTHERS.length; i++) {
    BROTHERS[i]['picture'] = "img/brothers/" + BROTHERS[i]['picture'];
    if (BROTHERS[i]['class'] == 'Senior')
        SENIORS.push(BROTHERS[i]);
    if (BROTHERS[i]['class'] == 'Junior')
        JUNIORS.push(BROTHERS[i]);
    if (BROTHERS[i]['class'] == 'Sophomore')
        SOPHOMORES.push(BROTHERS[i]);
}

var gallery_dir = "img/slideshow";
var GALLERY_PATHS = ['img/slideshow/10012636_10205482688203782_6388576308022252901_o.jpg', 'img/slideshow/10256432_551595518275151_6628059015044685081_o.jpg', 'img/slideshow/10485307_648604165216909_3907982428827242229_n.jpg', 'img/slideshow/10604592_718953091517227_2474447767988874026_o.jpg', 'img/slideshow/10671298_10152966473096454_1390350989027893558_n.jpg', 'img/slideshow/10676223_10205370066509340_8298623229524902544_n.jpg', 'img/slideshow/10730818_10152603702239209_5362410556469152194_n.jpg', 'img/slideshow/10854809_10154891790630548_1747811750320186263_o.jpg', 'img/slideshow/10991610_10206257445344585_49758502950122569_o.jpg', 'img/slideshow/11071042_10204205920207574_6875285911238956992_o.jpg', 'img/slideshow/11130478_10204132704937238_1668628494069849363_o.jpg', 'img/slideshow/11136225_10206439825895952_4999693961838504360_o.jpg', 'img/slideshow/11146403_10206447059116778_4582710654155928079_o.jpg', 'img/slideshow/11148224_10153644749907098_4280077734041303606_o.jpg', 'img/slideshow/11148837_10206439824095907_323544938231934717_o.jpg', 'img/slideshow/11155068_10206439825935953_8971904035208337071_o.jpg', 'img/slideshow/11194513_10152771062087117_8730822731557162714_o.jpg', 'img/slideshow/11236476_10100714418597149_3501479295556797450_o.jpg', 'img/slideshow/11705593_10204990283093777_8928817986989064873_o.jpg', 'img/slideshow/12034271_10153703338273899_4942579410883618356_o.jpg', 'img/slideshow/12108788_1000894049932193_8150773703550014127_n.jpg', 'img/slideshow/12132662_1216159235068295_4899761104472364082_o.jpg', 'img/slideshow/12141076_1216158085068410_6672383354925788655_o.jpg', 'img/slideshow/12184111_10153703338703899_7346950529197541925_o.jpg', 'img/slideshow/12186458_10153703337793899_3414272596221159879_o.jpg', 'img/slideshow/12186700_10153703338313899_8317902226254552678_o.jpg', 'img/slideshow/12189251_10153703338578899_5388726618216893290_o.jpg', 'img/slideshow/12238336_1050902824943680_6549216635403927715_o.jpg', 'img/slideshow/12362894_10156232399535123_6055016431080578518_o.jpg', 'img/slideshow/12419331_10209463919821166_3690921613774910163_o.jpg', 'img/slideshow/12493932_10207839008269810_3194637868294831778_o.jpg', 'img/slideshow/12764488_10207525861897571_8937596436867927154_o.jpg', 'img/slideshow/12928136_1189924961032697_2324926839291382518_n.jpg', 'img/slideshow/12933029_10208511131352467_398816882359149953_n.jpg', 'img/slideshow/12977224_10209587237184023_5272304119743844370_o.jpg', 'img/slideshow/12983221_966134286803620_5608204962289175692_o.jpg', 'img/slideshow/13048226_1152226121478016_4463560571237542472_o.jpg', 'img/slideshow/13076520_1014063242006209_4044147969271523730_n.jpg', 'img/slideshow/13113026_619155774927684_279802726139542909_o.jpg', 'img/slideshow/13116084_1743127529255972_8395612855222732706_o.jpg', 'img/slideshow/13119944_978021572281558_4552294574990393850_o.jpg', 'img/slideshow/13123390_10154173090058377_3198388147592754248_o.jpg', 'img/slideshow/13131625_1408288849196931_4754283531766462426_o.jpg', 'img/slideshow/13133330_1739966626218408_2894937623522223827_n.jpg', 'img/slideshow/13147628_1408289052530244_2118180511774386224_o.jpg', 'img/slideshow/13161785_1217849281568087_6804985687629827803_o.jpg', 'img/slideshow/13177486_1095335463822563_8835612914263088289_n.jpg', 'img/slideshow/13198548_1750480481854010_544431273137381887_o.jpg', 'img/slideshow/13248438_1750480511854007_6549214583471322093_o.jpg', 'img/slideshow/13307482_1385902821427268_4950972266423397845_n.jpg', 'img/slideshow/13308446_1754256224809769_4911224101845893397_o.jpg', 'img/slideshow/13320518_10154240457544108_2366476781506231148_o.jpg', 'img/slideshow/13923854_1071693912909808_1980779045023578118_o.jpg', 'img/slideshow/13924831_10207276677412206_4583930623358591291_n.jpg', 'img/slideshow/13925899_10208238579615033_2819292803135529411_o.jpg', 'img/slideshow/14054139_10207009403812912_8242133838949346912_n.jpg', 'img/slideshow/1546185_10204070135220889_4958307538282274035_n.jpg', 'img/slideshow/1606223_590401831037143_2120908330_o.jpg', 'img/slideshow/1617839_571531896308602_5373549197235816662_o.jpg', 'img/slideshow/1618099_10201377612473382_1587604536_o.jpg', 'img/slideshow/1913384_1660878764147516_9002408675210690919_o.jpg', 'img/slideshow/1924360_804429246245342_6457099290072677060_n.jpg', 'img/slideshow/1924382_833169036728076_5268366668694695_n.jpg', 'img/slideshow/887508_10207146791684584_4315234068502490146_o.jpg'];


@Component({
	selector: 'app-body',
	templateUrl: 'views/main.html',
	directives: [NavBarComponent, BrotherComponent]
})

export class AppComponent{
	brothers: Brother[];
	seniors: Brother[];
	juniors: Brother[];
	sophomores: Brother[];
	freshmen: Brother[];

	constructor(){
		this.gallery_paths=GALLERY_PATHS;
		this.brothers=BROTHERS;
		this.seniors=SENIORS;
		this.juniors=JUNIORS;
		this.sophomores=SOPHOMORES;
		console.log("app-body component ctor");
	}
}