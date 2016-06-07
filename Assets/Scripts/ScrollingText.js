    var speed = 1.5;
    var crawling = false;
    
    function Start()
    {
    // init text here, more space to work than in the Inspector (but you could do that instead)
    var tc = GetComponent(TextMesh);
    var creds = "Once upon a time\n";
    creds += "In a land far, far away\n";
    creds += "(A different planet, actually)\n";
    creds += "There was a secret organisation\n";
    creds += "They had invented a time machine\n";
    creds += "With this time machine, they kidnapped a man\n";
    creds += "The man was an ex-special ops agent\n";
    creds += "You are this man\n";
    creds += "It's your job to escape\n";
    creds += "and bring this organisation to justice\n";
    creds += "Good luck";
	tc.text= creds;
	}
    function Update ()
    {
    if (Input.GetKey(KeyCode.Escape))
	{
	Application.LoadLevel("Level 1");
	}
    if (!crawling)
    return;
    transform.Translate(Vector3.up * Time.deltaTime * speed);
	    if (gameObject.transform.position.y > 0)
	    {
		ChangeLevel();
	    }
    }
	function ChangeLevel()
	{
	FadeOut.fadeOut = true;
	yield WaitForSeconds(3);
	FadeOut.fadeOut = false;
	Application.LoadLevel("Level 1");
	}