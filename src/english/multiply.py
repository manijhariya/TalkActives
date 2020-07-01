import argparse
parser =argparse.ArgumentParser()
parser.add_argument('-i',type=int,help='to multiply a number')
args = parser.parse_args()
a = args.i
if a:
	print (a*a)
else:
	print ('Na!')
