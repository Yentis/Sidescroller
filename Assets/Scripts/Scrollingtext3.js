   	var speed = 1.5;
    var crawling = false;
    
    
    function Start()
    {
    // init text here, more space to work than in the Inspector (but you could do that instead)
    var tc = GetComponent(TextMesh);
    var creds = "After having activated the signal\n";
    creds += "You find yourself transported\n";
    creds += "to another planet\n";
    creds += "It seems to be the remains\n";
    creds += "of an advanced civilization\n";
    creds += "You move forward\n";
    creds += "hoping to catch\n";
    creds += "the people responsible for this\n";
    creds += "and bring them to justice\n";
	tc.text= creds;
	}
    function Update ()
    {
    if (Input.GetKey(KeyCode.Escape))
	{
	Application.LoadLevel("Level 3");
	}
    if (!crawling)
    return;
    transform.Translate(Vector3.up * Time.deltaTime * speed);
    if (gameObject.transform.position.y > -4)
    {

	ChangeLevel();
    }
    }
	function ChangeLevel()
	{
	FadeOut.fadeOut = true;
	yield WaitForSeconds(3);
	FadeOut.fadeOut = false;
	Application.LoadLevel("Level 3");
	}