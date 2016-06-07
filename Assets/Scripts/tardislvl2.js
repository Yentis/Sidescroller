#pragma strict

function OnTriggerEnter() 
{
Application.LoadLevel("shoptestlevel");
PlayerPrefs.SetInt("completed", 3);
}