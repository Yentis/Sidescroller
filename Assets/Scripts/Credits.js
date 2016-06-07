   	var speed = 1.5;
    var crawling = false;
    var player : Transform;
    static var begin : int;
    var placed : int;
    
    function Start()
    {
    // init text here, more space to work than in the Inspector (but you could do that instead)
    var tc = GetComponent(TextMesh);
    var creds = "Congratulations!\n";
    creds += "You have defeated\n";
    creds += "the final boss!\n";
    creds += "\n";
    creds += "Made by:\n";
    creds += "Levi Stroobants\n";
    creds += "Yentl Volcke\n";
    creds += "\n";
    creds += "Made with:\n";
    creds += "Unity\n";
	tc.text= creds;
	}
    function Update ()
    {
    if (begin == 1)
    {
    if (placed == 0)
    {
    Rollcredits();
    }
    if (Input.GetKey(KeyCode.Escape))
	{
	Application.LoadLevel("Main Menu");
	}
    if (!crawling)
    return;
    transform.Translate(Vector3.up * Time.deltaTime * speed);
    }
    }
	
	function Rollcredits()
	{
		transform.position.z = player.position.z;
    	PlayerShooting.disablemovement = 1;
    	placed = 1;
	}