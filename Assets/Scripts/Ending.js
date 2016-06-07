var audiostarted : int;

function Update ()
{
	if(Credits.begin == 1 && audiostarted == 0)
	{
		audio.Play();
		audiostarted = 1;	
	}
}