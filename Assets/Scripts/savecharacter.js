var moneysave;
var shieldsave;
var bandagesave;
var nieuweSkin : GUISkin;

function Update()
    {
    moneysave = PlayerPrefs.GetInt("money int").ToString();
    shieldsave = PlayerPrefs.GetInt("shield int").ToString();
    bandagesave = PlayerPrefs.GetInt("bandage int").ToString();
    }
    
    
    function OnGUI ()
	{
		GUI.skin = nieuweSkin;
		
		if (gameObject.GetComponent(Camera))
		{
			GUI.Button(Rect(10,10,100,30),"" + PlayerShooting.health);
		}
		UnityEngine.GUI.Button(Rect(120,10,120,30),moneysave + " Coins");
		UnityEngine.GUI.Button(Rect(10,55,100,25),shieldsave + " Shield");
		UnityEngine.GUI.Button(Rect(10,95,120,25),bandagesave + " Bandages");
	}