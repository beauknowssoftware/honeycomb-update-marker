 # Honeycomb Update Marker action
 
 This action updates a Marker in Honeycomb
 
 ## Inputs
 
 ### `X-Honeycomb-Team`
 **Required** The Team API Key for authentication
 
 ### `dataset`:
 **Required** The name of the dataset to create the marker in
 
 ### `markerId`:
 **Required** The identifier of the marker
 
 ### `end`:
 **Optional** Whether or not to end the marker
 
 ### `type`:
 **Optional** The type of marker to create
 
 ### `message`:
 **Optional** The message to attach to the marker
 
 ### `url`:
 **Optional** The target for the marker
    
 ## Example usage
 
 ```yaml
 uses: beauknowssoftware/honeycomb-update-marker@v0.1.4
 with:
   X-Honeycomb-Team: my-api-key
   dataset: my-dataset
   markerId: ${{ steps.create_marker.outputs.markerId }}
   end: true
```
