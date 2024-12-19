---
layout: page
title: Sprint 4 Reflection
course: sprint4
menu: nav/home.html
---

For this sprint, we explored the platformer game and its code, and tried to modify it to make it better.

### Changes: 

We mainly wanted to change the theme of the winter level from snow to Tyler the Creator. We looked at what each part of the code did in the level control, which managed the creation of the level. I added new sprite assets to change what the platforms look like and implemented it by importing them:
![image](https://github.com/user-attachments/assets/0ca1d927-9e01-4312-ab9d-1b95e29324e3)

Then placed the game objects (learned how to change the position of objects in the game level)
![image](https://github.com/user-attachments/assets/4161ac28-8c15-479a-9f39-e34e5fda9fa4)

I also learned how to properly make a randomizer function, which allowed me to add a random music feature that plays a random Tyler song each time the level starts, shown here:
![image](https://github.com/user-attachments/assets/450ae17c-cb49-4a16-9efb-4defb53509ea)

Finally, I added a boolean variable to control the block glow, so it can be easily changed later on (currently toggled off):
![image](https://github.com/user-attachments/assets/4657e0d7-2276-43d4-90cd-b2143e2c268c)

### Challenges

Throughout the entirety of Sprint 4, I was trying to fix the jump function. Lucas readded the missing jump logic, but that broke when standing on platforms. I found out that this was because the game was still applying gravity onto mario despite already being on a solid object by adding a console.log function whenever gravity was active, but I still haven't found a fix for it. 

### Overall
I think I learned a good bit about how games run and operate + some other things by tinkering with the game's code. There's been some obstacles, but I think I've been successful overall.

Total Commits: 
![image](https://github.com/user-attachments/assets/c4cb1f00-b8b6-47e5-a371-d708b86e7733)