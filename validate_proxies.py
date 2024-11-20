# # import requests
# # from bs4 import BeautifulSoup

# # def get_free_proxies():
# #     """
# #     Fetch free proxies from a public proxy site with browser-like headers.
    
# #     Returns:
# #         list: A list of proxy addresses in the format 'http://ip:port'.
# #     """
# #     url = "https://free-proxy-list.net/"
# #     headers = {
# #         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
# #     }

# #     try:
# #         response = requests.get(url, headers=headers, timeout=10)
# #         if response.status_code != 200:
# #             print(f"Failed to fetch proxies. HTTP Status Code: {response.status_code}")
# #             return []

# #         soup = BeautifulSoup(response.content, "html.parser")
# #         proxy_table = soup.find("table", id="proxylisttable")

# #         if not proxy_table:
# #             print("Proxy table not found on the page.")
# #             return []

# #         rows = proxy_table.find_all("tr")[1:]  # Skip header row
# #         proxies = []

# #         for row in rows:
# #             cols = row.find_all("td")
# #             if len(cols) > 6 and cols[6].text.strip() == "yes":  # Check for HTTPS support
# #                 ip = cols[0].text.strip()
# #                 port = cols[1].text.strip()
# #                 proxies.append(f"http://{ip}:{port}")

# #         return proxies
# #     except requests.exceptions.RequestException as e:
# #         print(f"Error fetching proxies: {e}")
# #         return []

# # # Test the function
# # free_proxies = get_free_proxies()
# # print(f"Found proxies: {free_proxies}")

# # # def get_free_proxies():
# # #     """
# # #     Fetches free proxies from a public proxy site.
# # #     Returns:
# # #         list: A list of proxy addresses in the format 'http://ip:port'.
# # #     """
# # #     url = "https://free-proxy-list.net/"
# # #     response = requests.get(url)
# # #     proxies = []

# # #     if response.status_code == 200:
# # #         # Parse proxies from the response (HTML parsing is required here)
# # #         from bs4 import BeautifulSoup
# # #         soup = BeautifulSoup(response.content, "html.parser")
# # #         rows = soup.find("table", id="proxylisttable").find_all("tr")

# # #         for row in rows[1:]:
# # #             cols = row.find_all("td")
# # #             if len(cols) > 6 and cols[6].text.strip() == "yes":  # Check for HTTPS
# # #                 proxies.append(f"http://{cols[0].text.strip()}:{cols[1].text.strip()}")

# # #     return proxies

# # # # Fetch proxies
# # # free_proxies = get_free_proxies()
# # # print(f"Found proxies: {free_proxies}")

# # def validate_proxies(proxy_list, test_url="https://www.google.com"):
# #     """
# #     Validates a list of proxies by checking if they can reach a test URL.
    
# #     Args:
# #         proxy_list (list): List of proxy addresses in the format 'http://ip:port'.
# #         test_url (str): URL to test proxy validity.

# #     Returns:
# #         list: A list of working proxies.
# #     """
# #     working_proxies = []

# #     for proxy in proxy_list:
# #         try:
# #             print(f"Testing proxy: {proxy}")
# #             response = requests.get(test_url, proxies={"http": proxy, "https": proxy}, timeout=5)
# #             if response.status_code == 200:
# #                 working_proxies.append(proxy)
# #                 print(f"Working proxy: {proxy}")
# #         except Exception as e:
# #             print(f"Proxy failed: {proxy}, Error: {e}")

# #     return working_proxies

# # # Validate proxies
# # working_proxies = validate_proxies(free_proxies)
# # print(f"Valid proxies: {working_proxies}")






# import requests

# url = "https://free-proxy-list.net/"
# headers = {
#     "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
#     "Referer": "https://free-proxy-list.net/",
#     "Accept-Language": "en-US,en;q=0.9",
#     "Connection": "keep-alive"
# }
# cookies = {
#     "_ga_F5HK5559Z2": "GS1.1.1731963211.4.0.1731963211.0.0.0", "_ga": "GA1.2.1194851937.1731716585",
#     "_gid": "GA1.2.1210210771.1731963211",
#     "_gat_gtag_UA_158616_8": "1"

# }

# response = requests.get(url, headers=headers, cookies=cookies, timeout=10)
# print(response.status_code)
# print(response.text[:500])  # Print first 500 characters of the response
