function Update()
{
	if (GameObject.Find("Bossguy"))
	{
	}
	else
	{
		animation.Play("SlidingDoorAnimation");
		audio.Play();
	}

}