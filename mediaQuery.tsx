import '@expo/match-media'
import { useMediaQuery } from 'react-responsive'

export const Media = () => {
    const isTabletOrMobileDevice = useMediaQuery({    
      maxDeviceWidth: 360, 
    });
    if (isTabletOrMobileDevice) {
      return 
    }
    return
}