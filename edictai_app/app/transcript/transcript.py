import re

text = "<m>NLC India Ltd secures 810 MW Grid Connected Solar Photovoltaic Power Project in Rajasthan. <m>NLC India Limited, a Navratna Central Public Sector Undertaking (CPSE) under the Ministry of Coal has won 810 MW Solar PV project capacity from Rajasthan Rajya Vidyut Nigam Limited (RRVUNL). <m>NLCIL has successfully garnered the entire capacity of the 810 MW tender floated by RRVUNL in December 2022, for developing the project at RRVUNL's 2000 MW Ultra Mega Solar Park. <m>The project will be located in Pugal Tehsil, Bikaner District, Rajasthan. <m>The Letter of Intent for this project has been issued by RRVUNL. <m>This achievement marks a significant step forward in NLCIL's commitment to clean and sustainable energy solutions."

sentences = re.split(r"<m>|\\n|\n|</m>",text)

sentences = [sentence.strip() for sentence in sentences]
sentences = [sentence for sentence in sentences if sentence]

print(sentences)