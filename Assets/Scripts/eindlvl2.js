var aan : int;
var nieuweSkin : GUISkin;
var timerstart : int;
var timerint : int;
var timerfloat : float = 30;
var eklik : int;
var troll1 : GameObject;
var troll2 : GameObject;
var troll3 : GameObject;
var troll4 : GameObject;
var troll5 : GameObject;
var troll6 : GameObject;
var troll7 : GameObject;
var troll8 : GameObject;
var troll9 : GameObject;
var troll10 : GameObject;
var spawn1 : Transform;
var spawn2 : Transform;
var tardis : Transform;

function Start()
{
	tardis.active = false;
}

function Update ()
{
if(Input.GetKeyDown(KeyCode.M)){
timerint = 1;
timerfloat = 1;
}

spawning();
//als aan 1 is (dus als je in trigger zit)
if(aan == 1)
{
	//en je klikt e
	if(Input.GetKeyDown(KeyCode.E))
		{
		eklik = 1;
		//activeer timer en enemy spawning

		timerstart = 1;
		}
}

//als timer moet gestart worden
if(timerstart == 1)
{
//trek om de seconde 1 af van timer
timerfloat = timerfloat - Time.deltaTime;
}

timerint = timerfloat;


if(timerint == 0)
{
tardis.active = true;
tardis.transform.position.y = 22.54801;
timerstart = 0;
Destroy(troll1);
Destroy(troll2);
Destroy(troll3);
Destroy(troll4);
Destroy(troll5);
Destroy(troll6);
Destroy(troll7);
Destroy(troll8);
Destroy(troll9);
Destroy(troll10);
}
}

function spawning()
{
	if(timerstart == 1)
	{
		if(timerint == 28)
		{
		troll1.transform.position.x = spawn1.transform.position.x; 
		troll1.transform.position.z = spawn1.transform.position.z; 
		troll1.transform.position.y = spawn1.transform.position.y;
		}

		if(timerint == 26)
		{
		troll2.transform.position.x = spawn2.transform.position.x; 
		troll2.transform.position.z = spawn2.transform.position.z; 
		troll2.transform.position.y = spawn2.transform.position.y;
		}
		
		if(timerint == 22)
		{
		troll3.transform.position.x = spawn1.transform.position.x; 
		troll3.transform.position.z = spawn1.transform.position.z; 
		troll3.transform.position.y = spawn1.transform.position.y;
		}
		
		if(timerint == 20)
		{
		troll4.transform.position.x = spawn2.transform.position.x; 
		troll4.transform.position.z = spawn2.transform.position.z; 
		troll4.transform.position.y = spawn2.transform.position.y;
		}
		
		if(timerint == 16)
		{
		troll5.transform.position.x = spawn1.transform.position.x; 
		troll5.transform.position.z = spawn1.transform.position.z; 
		troll5.transform.position.y = spawn1.transform.position.y;
		}
		
		if(timerint == 14)
		{
		troll6.transform.position.x = spawn2.transform.position.x; 
		troll6.transform.position.z = spawn2.transform.position.z; 
		troll6.transform.position.y = spawn2.transform.position.y;
		}
		
		if(timerint == 10)
		{
		troll7.transform.position.x = spawn1.transform.position.x; 
		troll7.transform.position.z = spawn1.transform.position.z; 
		troll7.transform.position.y = spawn1.transform.position.y;
		}
		
		if(timerint == 9)
		{
		troll8.transform.position.x = spawn2.transform.position.x; 
		troll8.transform.position.z = spawn2.transform.position.z; 
		troll8.transform.position.y = spawn2.transform.position.y;
		}
		
		if(timerint == 7)
		{
		troll9.transform.position.x = spawn1.transform.position.x; 
		troll9.transform.position.z = spawn1.transform.position.z; 
		troll9.transform.position.y = spawn1.transform.position.y;
		}
		
		if(timerint == 7)
		{
		troll10.transform.position.x = spawn2.transform.position.x; 
		troll10.transform.position.z = spawn2.transform.position.z; 
		troll10.transform.position.y = spawn2.transform.position.y;
		}

	}
}




//als je in de trigger zit
function OnTriggerStay (other : Collider) 
{
//aan word 1 als eklik 0 is
	if (eklik == 1)
		{
			aan = 0;
		}
	else 
		{
			aan = 1;
		}
}

//als je trigger leaved
function OnTriggerExit (other : Collider) 
{
//als je uit de trigger gaat, gaat aan terug op 0
aan = 0;
}

function OnGUI ()
{
	//Laden GUI Skin
	GUI.skin = nieuweSkin;
	
	if(aan == 1)
		{
			GUI.Button(Rect(Screen.width/2 - 100,10,200,30), "Press e to activate");
		}
		
	if(timerstart == 1)
		{
			GUI.Button(Rect(Screen.width/2 - 50,10,100,30), timerint.ToString());
			GUI.Button(Rect(Screen.width/2 - 50,50,100,30), "Survive!");
		}
}