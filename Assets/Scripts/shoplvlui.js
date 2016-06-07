var moneysave;
var shieldsave;
var bandagesave;
var maxhealth;
var weapondamage;
var nieuweSkin : GUISkin;

function Update()
    {
    moneysave = PlayerPrefs.GetInt("money int").ToString();
    shieldsave = PlayerPrefs.GetInt("shield int").ToString();
    bandagesave = PlayerPrefs.GetInt("bandage int").ToString();
    maxhealth= PlayerPrefs.GetInt("max health").ToString();
    weapondamage = PlayerPrefs.GetInt("weapon damage").ToString();
    }
    
    
    function OnGUI ()
	{
		GUI.skin = nieuweSkin;
	
		UnityEngine.GUI.Button(Rect(30,50,200,30), bandagesave+" Bandages");
		UnityEngine.GUI.Button(Rect(30,90,200,30), maxhealth+" Maximum health");
		UnityEngine.GUI.Button(Rect(30,130,200,30), shieldsave+" Shield");
		UnityEngine.GUI.Button(Rect(30,170,200,30), weapondamage+" Weapon damage");
		
	}