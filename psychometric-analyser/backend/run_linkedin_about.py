from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

def run_linkedin_about(input):
    userpage = input
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    
    driver.get("https://www.linkedin.com/login")
    driver.implicitly_wait(5)
    username = driver.find_element('id', 'username')
    username.send_keys('contactvividazure@gmail.com')
    password = driver.find_element('id', 'password')
    password.send_keys('leboys2002')
    login_button = driver.find_element('xpath', '//*[@aria-label="Sign in"]')
    login_button.click()

    driver.get(userpage)
    time.sleep(20)
    driver.implicitly_wait(5)

    about_text = driver.find_elements('xpath', '//span[@aria-hidden="true"]')
    a_text = []
    for a in about_text:
        a_text.append(a.text)

    ind = a_text.index('About')
    about = a_text[ind+1]
    # print(about)
    return about
