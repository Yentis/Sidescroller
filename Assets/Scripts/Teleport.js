﻿var FlashingLight : Light;
FlashingLight.enabled = false;

function FixedUpdate()
{
var RandomNumber = Random.value;

if (Tutorial.teleport == 1)
{
audio.Play();
if(RandomNumber<=.9)
{
FlashingLight.enabled = true;
}
else FlashingLight.enabled = false;
}
}