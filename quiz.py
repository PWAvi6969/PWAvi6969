import time

print("Welcome to my computer quiz!")

playing = input("Do you want to play? ")

if playing.lower() != "yes":
    quit()
print("Okay! Let's play :)")
score = 0

start_time = time.time()

answer = input("1. What is the acronym of CPU? ")
if answer.lower() == "central processing unit":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("2. What is the acronym of GPU? ")
if answer.lower() == "graphics processing unit":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("3. What is the acronym of PSU? ")
if answer.lower() == "power supply unit":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("4. What is the acronym of RAM? ")
if answer.lower() == "random access memory":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("5. What is the acronym of USB? ")
if answer.lower() == "universal serial bus":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("6. What is the acronym of LAN? ")
if answer.lower() == "local area network":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("7. What is the acronym of PDF? ")
if answer.lower() == "portable document format":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("8. What is the acronym of ROM? ")
if answer.lower() == "read only memory":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("9. What is the acronym of OS? ")
if answer.lower() == "operating system":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("10. What is the acronym of PC? ")
if answer.lower() == "personal computer":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("11. What is the acronym of HDD? ")
if answer.lower() == "hard disk drive":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("12. What is the acronym of AI? ")
if answer.lower() == "artificial intelligence":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("13. What is the acronym of CD? ")
if answer.lower() == "compact disk":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("14. What is the acronym of CMD? ")
if answer.lower() == "command":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("15. What is the acronym of DVD? ")
if answer.lower() == "digital versatile disk":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

end_time = time.time()
total_time = round(end_time - start_time, 2)
print("----------------------")
print("Nice work! You finished in", total_time, "seconds!")
print("Your total score is " + str(score) + " questions correct!")
print("You got " + str((score / 15) * 100) + "%.")
print("Thank you for playing my computer acronym quiz!")
