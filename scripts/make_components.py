# Script to make new potato files in components bc I'm lazy
import argparse
import os

parser = argparse.ArgumentParser(
    description='''Automatically make components files''')
parser.add_argument('--name', dest="new_potato", type=str,
                    nargs='+', help='Name(s) of new potato file', required=True)
parser.add_argument('--scss', action="store_true",
                    help='Include index.scss file')
args = parser.parse_args()

for potato in args.new_potato:
    potato_formatted_name = f"{potato[0].upper()}{potato[1:]}"
    potato_dir = f"{potato_formatted_name}Potato"

    if not os.path.exists(f"../src/components/{potato_dir}"):
        try:
            os.system(f"mkdir ../src/components/{potato_dir}")
            os.system(f"touch ../src/components/{potato_dir}/index.tsx")
            os.system(
                f"touch ../src/components/{potato_dir}/{potato_formatted_name.lower()}Potato.stories.tsx")
            if args.scss:
                os.system(f"touch ../src/components/{potato_dir}/index.scss")
            print("Success")
        except Exception as error:
            print(error)
