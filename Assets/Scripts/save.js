#pragma strict
static var savecolorcube;
function Start () {

savecolorcube = PlayerPrefs.GetInt("color int");


if(savecolorcube != null)
{
 Debug.Log("jetpack");
}



if(savecolorcube == 1){
renderer.material.color = Color.yellow;

}

else if(savecolorcube == 0)
{
renderer.material.color = Color.blue;
}
else if(savecolorcube == 2) {
renderer.material.color = Color.red;
}

}

function OnGUI () {


if(GUI.Button(Rect(30,10,100,50),"geel"))
		{
		renderer.material.color = Color.yellow;
		Save(1);
		}
		
		
		if(GUI.Button(Rect(30,100,100,50),"blauw"))
		{
		renderer.material.color = Color.blue;
		Save(0);
		}
		
		
		if(GUI.Button(Rect(30,190,100,50),"rood"))
		{
		renderer.material.color = Color.red;
		Save(2);
		}
}


function Save(colorint : int )
{
PlayerPrefs.SetInt("color int", colorint);
}