###
#
#  Sort integer arguments (ascending) 
#
###

# create an empty array to hold the sorted integers
result = []
ARGV.each do |arg|
    # check if the argument is an integer using a regular expression
    # skip if not integer
    next if arg !~ /^-?[0-9]+$/

    # convert to integer
    i_arg = arg.to_i
    
    # insert result at the right position
    is_inserted = false
    i = 0
    l = result.size
    while !is_inserted && i < l do # loop through the array until the integer is inserted
        if result[i] < i_arg
            i += 1
        else
            result.insert(i, i_arg)
            is_inserted = true
            break
        end
    end
    # if the integer has not been inserted, add it to the end of the array
    result << i_arg if !is_inserted
end

# print the sorted array to the console
puts result
