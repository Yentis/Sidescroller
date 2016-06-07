    var speed = 1.5;
    var crawling = false;
    
    function Start()
    {
    // init text here, more space to work than in the Inspector (but you could do that instead)
    var tc = GetComponent(TextMesh);
;
    
        var creds = "Our hero has escaped\n";
    creds += "his terrible fate\n";
    creds += "from those prison cells\n";
    creds += "\n";
    creds += "Now he finds himself\n";
    creds += "on an unknown planet\n";
    creds += "receiving a distress signal from nearby\n";
    creds += "so he decides it would be smart\n";
    creds += "to see if there's a ship\n";
    creds += "that can get him off this planet";
	tc.text= creds;
	}
    function Update ()
    {
    if (Input.GetKey(KeyCode.Escape))
	{
	Application.LoadLevel("lvl2");
	}
    if (!crawling)
    return;
    transform.Translate(Vector3.up * Time.deltaTime * speed);
    if (gameObject.transform.position.y > -15)
    {
	ChangeLevel();
    }
    }
	function ChangeLevel()
	{
	FadeOut.fadeOut = true;
	yield WaitForSeconds(3);
	FadeOut.fadeOut = false;
	Application.LoadLevel("lvl2");
	}