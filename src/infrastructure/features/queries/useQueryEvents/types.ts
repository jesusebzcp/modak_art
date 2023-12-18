export type EventsResponse = {
  pagination: Pagination;
  data: EventItem[];
  info: Info;
  config: Config;
};

export type Config = {
  iiif_url: string;
  website_url: string;
};

export type EventItem = {
  id: number;
  api_model: APIModel;
  api_link: string;
  title: string;
  title_display: null | string;
  image_url: string;
  hero_caption: string;
  short_description: string;
  header_description: null | string;
  list_description: string;
  description: string;
  location: Location;
  event_type_id: number;
  alt_event_type_ids: number[];
  audience_id: number;
  alt_audience_ids: number[];
  program_ids: number[];
  program_titles: ProgramTitle[];
  is_ticketed: boolean;
  ticketed_event_id: number;
  rsvp_link: string;
  buy_button_text: BuyButtonText;
  buy_button_caption: null | string;
  is_registration_required: boolean;
  is_member_exclusive: boolean;
  is_sold_out: boolean;
  is_free: boolean;
  is_private: boolean;
  is_admission_required: boolean;
  is_after_hours: boolean;
  is_virtual_event: boolean;
  virtual_event_url: null;
  virtual_event_passcode: null;
  start_date: string;
  end_date: string;
  start_time: StartTime;
  end_time: string;
  date_display: null;
  door_time: null | string;
  layout_type: number;
  slug: string;
  entrance: null;
  join_url: null;
  survey_url: null;
  event_host_id: null;
  event_host_title: null;
  search_tags: null;
  source_updated_at: Date;
  updated_at: Date;
  timestamp: Date;
};

export enum APIModel {
  Events = 'events',
}

export enum BuyButtonText {
  BuyTickets = 'Buy Tickets',
  Register = 'Register',
}

export enum Location {
  FullertonHall = 'Fullerton Hall',
  NEWLOCATIONFullertonHall = 'NEW LOCATION: Fullerton Hall',
  RyanLearningCenterStudioCAtTheArtInstituteOfChicago = 'Ryan Learning Center, Studio C at the Art Institute of Chicago',
}

export enum ProgramTitle {
  AmericanSignLanguageTours = 'American Sign Language Tours',
  ConservationAndScience = 'Conservation and Science',
  Lectures = 'Lectures',
}

export enum StartTime {
  The1200 = '12:00',
  The1500 = '15:00',
  The1800 = '18:00',
}

export type Info = {
  license_text: string;
  license_links: string[];
  version: string;
};

export type Pagination = {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  prev_url: string;
  next_url: string;
};

export type useQueryEventsProps = {
  limit?: number;
  page?: number;
};
