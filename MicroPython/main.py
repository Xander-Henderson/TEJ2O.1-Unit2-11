"""
Created by: Alexander
Created on: Oct 2025
This module shows two random number from 0 to 99.
"""

from microbit import *
import random

# setup
random_number_one = 0
random_number_two = 0
display.clear()
display.show(Image.HAPPY)

# gives the variable the random number
random_number_one = random (0, 99)
random_number_two = random (0, 99)

# show number one
while True:
    if button_a.is_pressed():
        display.show(random_number_one)

# show number two
while True:
    if button_b.is_pressed():
        display.show(random_number_two)
