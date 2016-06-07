var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
var myAnimator : Animator;

var moveDirection : Vector3 = Vector3.zero;

function Update ()
{
if (PlayerShooting.disablemovement != 1)
{
if (PlayerShooting.Weapon_ID == 1)
{
	speed = 12;
}
var controller : CharacterController = GetComponent(CharacterController);

if (controller.isGrounded)
	{
		moveDirection = Vector3(0,0,Input.GetAxis("Horizontal"));
		if(Animating.facingRight == true)
		{
		moveDirection = transform.TransformDirection(moveDirection);
		}
		else
		{
		moveDirection = transform.TransformDirection(-moveDirection);
		}
		moveDirection *= speed;
		
			if(Input.GetButton("Jump"))
			{
				moveDirection.y = jumpSpeed;
			}
	}
	
moveDirection.y -= gravity * Time.deltaTime;

controller.Move(moveDirection * Time.deltaTime);
transform.position.x = 0;
}
}