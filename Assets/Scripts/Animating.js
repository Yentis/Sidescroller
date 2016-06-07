static var facingRight = true;
var myAnimator : Animator;
var Movement : float = 0;
var soundplaying : float;
var audio1: AudioSource;
var audio2: AudioSource;

function Start ()
{
	var aSources = GetComponents(AudioSource);
    audio1 = aSources[0];
    audio2 = aSources[1];

}

function Update ()
{
if (PlayerShooting.disablemovement != 1)
{
	if(Input.GetKey("d"))
	{
	if (soundplaying == 0)
	{
	Audio();
	}
	Movement = 1;
		if (myAnimator == null)
    	{
		Debug.LogError("Animator is null!");
		}
		else
		{
		myAnimator.SetFloat("Movement", Movement);
		}
			if(Input.GetKey("left shift"))
			{
			transform.rotation.y = 180;
			facingRight = false;
				if (myAnimator == null)
    			{
				Debug.LogError("Animator is null!");
				}
				else
				{
				myAnimator.SetInteger("Backwards", 1);
				}
			}
			else
			{
			transform.rotation.y = 0;
			facingRight = true;
				if (myAnimator == null)
    			{
				Debug.LogError("Animator is null!");
				}
				else
				{
				myAnimator.SetInteger("Backwards", 0);
				}
			}
		
	}
	else if(Input.GetKey("q"))
	{
	if (soundplaying == 0)
	{
	Audio();
	}
	Movement = 1;
		if (myAnimator == null)
    	{
		Debug.LogError("Animator is null!");
		}
		else
		{
		myAnimator.SetFloat("Movement", Movement);
		}
			if(Input.GetKey("left shift"))
			{
			transform.rotation.y = 0;
			facingRight = true;
				if (myAnimator == null)
    			{
				Debug.LogError("Animator is null!");
				}
				else
				{
				myAnimator.SetInteger("Backwards", 1);
				}
			}
			else
			{
			transform.rotation.y = 180;
			facingRight = false;
				if (myAnimator == null)
    			{
				Debug.LogError("Animator is null!");
				}
				else
				{
				myAnimator.SetInteger("Backwards", 0);
				}
			}
	}
	else
	{
		Movement = 0;
		
			if (myAnimator == null)
    		{
			Debug.LogError("Animator is null!");
			}
			else
			{
			myAnimator.SetFloat("Movement", Movement);
			}
			if (myAnimator == null)
    		{
			Debug.LogError("Animator is null!");
			}
			else
			{
			myAnimator.SetInteger("Backwards", 0);
			}
	}
}
}

function Audio()
{
	audio1.pitch = Random.Range(0.8f, 1.5f);
	audio1.Play();
	soundplaying = 1;
	yield WaitForSeconds (audio1.clip.length);
	soundplaying = 0;
}