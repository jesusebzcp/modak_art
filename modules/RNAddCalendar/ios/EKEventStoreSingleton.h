//
//  EKEventStoreSingleton.h
//  modak_art
//
//  Created by Jesus Eduardo on 17/12/23.
//

#ifndef EKEventStoreSingleton_h
#define EKEventStoreSingleton_h
#import <EventKit/EventKit.h>

@interface EKEventStoreSingleton : NSObject {
}


+ (EKEventStore *)getInstance;

@end

#endif /* EKEventStoreSingleton_h */
