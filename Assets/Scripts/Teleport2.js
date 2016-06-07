var FlashingLight : Light;
FlashingLight.enabled = false;
var player : Transform;

function FixedUpdate()
{
var RandomNumber = Random.value;

if (player.position.z < -170)
{
audio.Play();
if(RandomNumber<=.9)
{
FlashingLight.enabled = true;
}
else FlashingLight.enabled = false;
}
if (player.position.z < -190.5)
{
PlayerPrefs.SetInt("completed", 4);
Application.LoadLevel("shoptestlevel");
}
}