var audio1: AudioSource;

function Start()
{
	var aSources = GetComponents(AudioSource);
    audio1 = aSources[2];
}

function Update ()
{
	if(Credits.begin == 1)
	{
		audio1.Stop();
	}
}