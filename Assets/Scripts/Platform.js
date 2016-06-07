var done : float;

function Update()
{
	if (Door.Platform == 1 && done == 0)
	{
	renderer.enabled = true;
	collider.enabled = true;
	done = 1;
	}
	if (GameObject.Find("Bossguy"))
	{
	}
	else
	{
	renderer.enabled = false;
	collider.enabled = false;
	}
}